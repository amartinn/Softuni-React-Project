using Microsoft.EntityFrameworkCore;
using Movies.Server.Data.Common;
using Movies.Server.Data.Models;
using Movies.Server.Features.Movies.Models;
using Movies.Server.Infrastructure.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movies.Server.Features.Movies
{
    public class MovieService : IMovieService
    {
        private readonly IRepository<UserMovies> userMoviesRepository;

        public MovieService(IRepository<UserMovies> userMoviesRepository)
        {
            this.userMoviesRepository = userMoviesRepository;
        }
        public async Task<Result> AddToFavorites(int movieId, string userId)
        {

            if (this.UserHasMovie(movieId, userId))
            {
                return "The movie is already added to favorites.";
            }
            var movie = new Movie { ExternalAPIId = movieId };
            var userMovies = new UserMovies { Movie = movie, UserId = userId };
            await this.userMoviesRepository.AddAsync(userMovies);
            await this.userMoviesRepository.SaveChangesAsync();

            return true;
        }

        public IEnumerable<MovieListingServiceModel> GetMoviesByUserId(string userId)
            => this.userMoviesRepository
                .All()
                .Where(x => x.UserId == userId)
                .Select(x => new MovieListingServiceModel
                {
                    Id = x.Movie.ExternalAPIId,
                })
                .ToList();

        public async Task<Result> RemoveFromFavorites(int movieId, string userId)
        {
            if (!this.UserHasMovie(movieId, userId))
            {
                return "The movie doesnt exists in the favorites list!";
            }
            var userMovies = this.userMoviesRepository
                .All()
                .FirstOrDefault(x => x.UserId == userId && x.Movie.ExternalAPIId == movieId);

            this.userMoviesRepository.Delete(userMovies);
            await this.userMoviesRepository.SaveChangesAsync();

            return true;
        }

        private bool UserHasMovie(int movieId, string userId)
            => this.userMoviesRepository.All().Where(x => x.UserId == userId)
                .Any(x => x.Movie.ExternalAPIId == movieId);
    }
}
