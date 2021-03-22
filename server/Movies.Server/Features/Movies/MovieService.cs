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
        private readonly IRepository<Movie> movies;

        public MovieService(IRepository<Movie> movies)
        {
            this.movies = movies;
        }
        public async Task<Result> AddToFavorites(int movieId, string userId)
        {

            if (this.UserHasMovie(movieId, userId))
            {
                return "The movie is already added to favorites.";
            }
            var movie = new Movie { ExternalAPIId = movieId, UserId = userId };
            await this.movies.AddAsync(movie);
            await this.movies.SaveChangesAsync();

            return true;
        }

        public IEnumerable<MovieListingServiceModel> GetMoviesByUserId(string userId)
            => this.movies
                .All()
                .Where(x => x.UserId == userId)
                .Select(x => new MovieListingServiceModel
                {
                    Id = x.ExternalAPIId,
                })
                .ToList();

        public async Task<Result> RemoveFromFavorites(int movieId, string userId)
        {
            if (!this.UserHasMovie(movieId, userId))
            {
                return "The movie doesnt exists in the favorites list!";
            }
            var movie = this.movies
                .All()
                .FirstOrDefault(x => x.UserId == userId && x.ExternalAPIId == movieId);

            this.movies.Delete(movie);
            await this.movies.SaveChangesAsync();

            return true;
        }

        private bool UserHasMovie(int movieId, string userId)
            => this.movies.All()
                .Any(x => x.ExternalAPIId == movieId && x.UserId == userId);
    }
}
