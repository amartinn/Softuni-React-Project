namespace Movies.Server.Data.Models
{
    using Movies.Server.Data.Models.Base;
    using System.ComponentModel.DataAnnotations;

    using static Validation.Comment;

    public class Comment : BaseModel<string>
    {
        [Required]
        [MaxLength(MaxBodyLength)]
        public string Body { get; set; }

        [Required]
        public int CommentedMovieId { get; set; }

        public Movie CommentedMovie { get; set; }
    }
}
