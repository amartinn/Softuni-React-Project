namespace Movies.Server.Features.Comments
{
    using Features.Comments.Models;
    using Infrastructure.Services;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    public interface ICommentService
    {
        public Task<Result> AddCommentToMovie(string userId, int movieId, string commentBody);

        public Task<Result> UpdateComment(string userId, int movieId, string commentBody);

        public IEnumerable<CommentListingServiceModel> GetCommentsByUserId(string userId);
    }
}
