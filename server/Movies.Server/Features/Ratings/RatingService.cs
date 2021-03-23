namespace Movies.Server.Features.Ratings
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Data.Common;
    using Data.Models;
    using Infrastructure.Services;
    using Models;

    public class RatingService : IRatingService
    {
        private readonly IRepository<Movie> movies;
        private readonly IRepository<Rating> ratings;

        public RatingService(IRepository<Movie> movies, IRepository<Rating> ratings)
        {
            this.movies = movies;
            this.ratings = ratings;
        }

        public async Task<Result> AddRatingToMovie(int value, int movieId, string userId)
        {
            if (!this.UserHasMovie(userId, movieId))
            {
                return "That movie is not present in user's favorite list";
            }

            var dbMovieID = this.movies
                .All()
                .FirstOrDefault(x => x.ExternalAPIId == movieId && x.UserId == userId).Id;

            var ratingExists = this.ratings.All()
                .FirstOrDefault(x => x.RatedById == userId && x.RatedMovieId == dbMovieID);

            if (ratingExists == null)
            {
                var rating = new Rating { Value = value, RatedById = userId, RatedMovieId = dbMovieID };
                await this.ratings.AddAsync(rating);
                await this.ratings.SaveChangesAsync();

                return true;
            }

            return "There is already a rating for that movie.";
        }

        public IEnumerable<RatingListingServiceModel> GetRatingsByUserId(string userId)
              => this.ratings.All().Where(x => x.RatedById == userId)
            .Select(x => new RatingListingServiceModel
            {
                Value = x.Value,
                MovieId = x.RatedMovie.ExternalAPIId,
            });

        public async Task<Result> UpdateRating(int value, int movieId, string userId)
        {
            if (!this.UserHasMovie(userId, movieId))
            {
                return "That movie is not present in user's favorite list";
            }

            var dbMovieId = this.movies
              .All()
              .FirstOrDefault(x => x.ExternalAPIId == movieId && x.UserId == userId).Id;

            var rating = this.ratings.All()
                .FirstOrDefault(x => x.RatedById == userId && x.RatedMovieId == dbMovieId);
            if (rating == null)
            {
                return "There isnt a rating for that movie.";
            }

            rating.Value = value;
            await this.ratings.SaveChangesAsync();
            return true;
        }

        private bool UserHasMovie(string userId, int movieId)
           => this.movies.All().Any(x => x.UserId == userId && x.ExternalAPIId == movieId);
    }
}
