namespace Movies.Server.Features.Ratings
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Features.Ratings.Models;
    using Infrastructure.Services;

    public interface IRatingService
    {
        Task<Result> AddRatingToMovie(int value, int movieId, string userId);

        Task<Result> UpdateRating(int value, int movieId, string userId);

        IEnumerable<RatingListingServiceModel> GetRatingsByUserId(string userId);
    }
}
