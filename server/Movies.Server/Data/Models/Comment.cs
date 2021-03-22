namespace Movies.Server.Data.Models
{
    using Movies.Server.Data.Models.Base;
    using System;
    using System.ComponentModel.DataAnnotations;

    using static Validation.Comment;

    public class Comment : BaseModel<string>
    {
        public Comment()
        {
            this.Id = Guid.NewGuid().ToString();
        }
        [Required]
        [MaxLength(MaxBodyLength)]
        public string Body { get; set; }

        [Required]
        public int CommentedMovieId { get; set; }

        public virtual Movie CommentedMovie { get; set; }

        [Required]
        public string CommentedById { get; set; }

        public virtual User CommentedBy { get; set; }
    }
}
