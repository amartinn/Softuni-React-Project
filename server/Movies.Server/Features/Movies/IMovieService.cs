namespace Movies.Server.Features.Movies
{
    using Models;
    using Infrastructure.Services;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IMovieService
    {
        Task<Result> AddToFavorites(int movieId, string userId);

        Task<Result> RemoveFromFavorites(int movieId, string userId);

        IEnumerable<MovieListingServiceModel> GetMoviesByUserId(string userId);
    }
}
