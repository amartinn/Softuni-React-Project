namespace Movies.Server.Data.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using Movies.Server.Data.Models.Base;

    public class Movie : BaseModel<int>
    {
        public int ExternalAPIId { get; set; }

        [Required]
        public string UserId { get; set; }

        public virtual User User { get; set; }

        public virtual IEnumerable<Rating> Ratings { get; } = new HashSet<Rating>();

        public virtual IEnumerable<Comment> Comments { get; } = new HashSet<Comment>();
    }
}
