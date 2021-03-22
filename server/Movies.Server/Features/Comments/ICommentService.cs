namespace Movies.Server.Features.Comments
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Features.Comments.Models;
    using Infrastructure.Services;

    public interface ICommentService
    {
        public Task<Result> AddCommentToMovie(string userId, int movieId, string commentBody);

        public Task<Result> UpdateComment(string userId, int movieId, string commentBody);

        public IEnumerable<CommentListingServiceModel> GetCommentsByUserId(string userId);
    }
}
