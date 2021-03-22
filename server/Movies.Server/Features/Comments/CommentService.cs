namespace Movies.Server.Features.Comments
{
    using Data.Common;
    using Data.Models;
    using Features.Movies;
    using global::Movies.Server.Features.Comments.Models;
    using Infrastructure.Services;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class CommentService : ICommentService
    {
        private readonly IRepository<Comment> comments;
        private readonly IRepository<Movie> movies;

        public CommentService(IRepository<Comment> comments,
            IRepository<Movie> movies)
        {
            this.comments = comments;
            this.movies = movies;
        }
        public async Task<Result> AddCommentToMovie(string userId, int movieId, string commentBody)
        {
            if (!UserHasMovie(userId, movieId))
            {
                return "That movie is not present in user's favorite list";
            }

            var dbMovieID = this.movies
                .All()
                .FirstOrDefault(x => x.ExternalAPIId == movieId && x.UserId == userId).Id;

            var commentExists = this.comments.All()
                .FirstOrDefault(x => x.CommentedById == userId && x.CommentedMovieId == dbMovieID);

            if (commentExists == null)
            {
                var comment = new Comment { Body = commentBody, CommentedById = userId, CommentedMovieId = dbMovieID };
                await this.comments.AddAsync(comment);
                await this.comments.SaveChangesAsync();

                return true;
            }
            return "There is already a comment for that movie.";
        }

        public IEnumerable<CommentListingServiceModel> All(string userId)
            => this.comments.All().Where(x => x.CommentedById == userId)
            .Select(x => new CommentListingServiceModel
            {
                CommentBody = x.Body,
                MovieId = x.CommentedMovieId,
            });

        public async Task<Result> UpdateComment(string userId, int movieId, string commentBody)
        {
            if (!UserHasMovie(userId, movieId))
            {
                return "That movie is not present in user's favorite list";
            }
            var dbMovieID = this.movies
              .All()
              .FirstOrDefault(x => x.ExternalAPIId == movieId && x.UserId == userId).Id;

            var comment = this.comments.All()
                .FirstOrDefault(x => x.CommentedById == userId && x.CommentedMovieId == dbMovieID);
            if (comment == null)
            {
                return "There isnt a comment for that movie.";
            }
            comment.Body = commentBody;
            await this.comments.SaveChangesAsync();
            return true;
        }

        private bool UserHasMovie(string userId, int movieId)
            => this.movies.All().Any(x => x.UserId == userId && x.ExternalAPIId == movieId);
    }
}
