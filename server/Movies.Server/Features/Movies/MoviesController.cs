namespace Movies.Server.Features.Movies
{
    using System.Threading.Tasks;
    using Features.Movies.Models;
    using Infrastructure.Services;
    using Microsoft.AspNetCore.Mvc;

    public class MoviesController : ApiController
    {
        private readonly IMovieService movies;
        private readonly ICurrentUserService currentUser;

        public MoviesController(IMovieService movies, ICurrentUserService currentUser)
        {
            this.movies = movies;
            this.currentUser = currentUser;
        }

        [HttpPost]
        [Route(nameof(Add))]
        public async Task<ActionResult> Add(MovieRequestModel model)
        {
            var userId = this.currentUser.GetId();
            var result = await this.movies.AddToFavorites(model.MovieId, userId);

            if (result.Succeeded)
            {
                return this.Created(nameof(this.Add), model.MovieId);
            }

            return this.BadRequest(result.Error);
        }

        [HttpDelete]
        [Route(nameof(Remove))]
        public async Task<ActionResult> Remove(MovieRequestModel model)
        {
            var userId = this.currentUser.GetId();
            var result = await this.movies.RemoveFromFavorites(model.MovieId, userId);

            if (result.Succeeded)
            {
                return this.Accepted(nameof(this.Remove));
            }

            return this.BadRequest(result.Error);
        }

        [HttpGet]
        [Route(nameof(All))]
        public ActionResult All()
        {
            var userId = this.currentUser.GetId();

            var movies = this.movies.GetMoviesByUserId(userId);
            return this.Ok(movies);
        }
    }
}
