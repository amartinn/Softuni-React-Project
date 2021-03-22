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
        private readonly IDeletableEntityRepository<Movie> movieRepository;
        private readonly IRepository<User> userRepository;
        private readonly IRepository<UserMovies> userMoviesRepository;

        public MovieService(IDeletableEntityRepository<Movie> movieRepository,
            IRepository<User> userRepository,
            IRepository<UserMovies> userMoviesRepository)
        {
            this.movieRepository = movieRepository;
            this.userRepository = userRepository;
            this.userMoviesRepository = userMoviesRepository;
        }
        public async Task<Result> AddToFavorites(int movieId, string userId)
        {

            if (this.UserHasMovie(movieId, userId))
            {
                return "The movie is already added to favorites.";
            }
            await movieRepository.AddAsync(new Movie { Id = movieId });
            await movieRepository.SaveChangesAsync();
            var userMovies = new UserMovies { MovieId = movieId, UserId = userId };
            await this.userMoviesRepository.AddAsync(userMovies);
            await this.userMoviesRepository.SaveChangesAsync();

            return true;
        }

        public async Task<IEnumerable<MovieListingServiceModel>> GetMoviesByUserId(string userId)
            => await this.userRepository
            .All()
            .FirstOrDefault(x => x.Id == userId)
            .UserMovies
            .Select(x => new MovieListingServiceModel
            {
                Id = x.MovieId
            })
            .AsQueryable()
            .ToListAsync();

        public async Task<Result> RemoveFromFavorites(int movieId, string userId)
        {
            if (!this.UserHasMovie(movieId, userId))
            {
                return "The movie doesnt exists in the favorites list!";
            }
            var userMovies = this.userMoviesRepository.All().FirstOrDefault(x => x.UserId == userId && x.MovieId == movieId);

            this.userMoviesRepository.Delete(userMovies);
            await this.userMoviesRepository.SaveChangesAsync();

            return true;
        }

        private bool UserHasMovie(int movieId, string userId)
            => this.userMoviesRepository.All().Where(x => x.UserId == userId)
                .Any(x => x.MovieId == movieId);
    }
}
