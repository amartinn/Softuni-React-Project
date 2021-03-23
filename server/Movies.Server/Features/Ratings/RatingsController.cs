namespace Movies.Server.Features.Ratings
{
    using System.Threading.Tasks;
    using Features.Ratings.Models;
    using Infrastructure.Services;
    using Microsoft.AspNetCore.Mvc;

    public class RatingsController : ApiController
    {
        private readonly ICurrentUserService currentUser;
        private readonly IRatingService ratings;

        public RatingsController(ICurrentUserService currentUser, IRatingService ratings)
        {
            this.currentUser = currentUser;
            this.ratings = ratings;
        }

        [HttpPost]
        [Route(nameof(Add))]
        public async Task<ActionResult> Add(RatingRequestModel model)
        {
            var userId = this.currentUser.GetId();
            var result = await this.ratings.AddRatingToMovie(model.Value, model.MovieId, userId);
            if (result.Succeeded)
            {
                return this.Created(nameof(this.Add), model);
            }

            return this.BadRequest(result.Error);
        }

        [HttpPut]
        [Route(nameof(Update))]
        public async Task<ActionResult> Update(RatingRequestModel model)
        {
            var userId = this.currentUser.GetId();
            var result = await this.ratings.UpdateRating(model.Value, model.MovieId, userId);
            if (result.Succeeded)
            {
                return this.Ok(model);
            }

            return this.BadRequest(result.Error);
        }

        [HttpGet]
        [Route(nameof(All))]
        public IActionResult All()
        {
            var userId = this.currentUser.GetId();
            var ratings = this.ratings.GetRatingsByUserId(userId);
            return this.Ok(ratings);
        }
    }
}
