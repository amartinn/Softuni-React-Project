namespace Movies.Server.Features.Movies
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Features.Movies.Models;
    using Infrastructure.Services;

    public interface IMovieService
    {
        Task<Result> AddToFavorites(int movieId, string userId);

        Task<Result> RemoveFromFavorites(int movieId, string userId);

        IEnumerable<MovieListingServiceModel> GetMoviesByUserId(string userId);
    }
}
