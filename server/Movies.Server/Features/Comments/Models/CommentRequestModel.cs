namespace Movies.Server.Features.Comments.Models
{
    using System.ComponentModel.DataAnnotations;

    using static Data.Validation.Comment;
    public class CommentRequestModel
    {

        [Required]
        [MaxLength(MaxBodyLength)]
        public string Body { get; set; }

        [Required]
        public int MovieId { get; set; }
    }
}
