using Microsoft.AspNetCore.Mvc;
using Movies.Server.Features.Comments.Models;
using Movies.Server.Infrastructure.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movies.Server.Features.Comments
{
    public class CommentsController : ApiController
    {
        private readonly ICurrentUserService currentUser;
        private readonly ICommentService comments;

        public CommentsController(ICurrentUserService currentUser, ICommentService comments)
        {
            this.currentUser = currentUser;
            this.comments = comments;
        }

        [HttpPost]
        [Route(nameof(Add))]
        public async Task<ActionResult> Add(CommentRequestModel model)
        {
            var userId = this.currentUser.GetId();
            var result = await this.comments.AddCommentToMovie(userId, model.MovieId, model.Body);
            if (result.Succeeded)
            {
                return this.Created(nameof(this.Add), model);
            }

            return this.BadRequest(result.Error);
        }

        [HttpPut]
        [Route(nameof(Update))]
        public async Task<ActionResult> Update(CommentRequestModel model)
        {
            var userId = this.currentUser.GetId();
            var result = await this.comments.UpdateComment(userId, model.MovieId, model.Body);
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
            var comments = this.comments.GetCommentsByUserId(userId);
            return this.Ok(comments);
        }
    }
}
