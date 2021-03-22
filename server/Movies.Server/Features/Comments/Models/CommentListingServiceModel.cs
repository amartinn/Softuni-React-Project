using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movies.Server.Features.Comments.Models
{
    public class CommentListingServiceModel
    {
        public int MovieId { get; set; }

        public string CommentBody { get; set; }
    }
}
