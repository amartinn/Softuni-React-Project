namespace Movies.Server.Data.Models
{
    using Movies.Server.Data.Models.Base;
    using System.Collections.Generic;

    public class Movie : BaseDeletableModel<int>
    {
        public int ExternalAPIId { get; set; }
        public virtual IEnumerable<UserMovies> UserMovies { get; set; } = new HashSet<UserMovies>();

        public virtual IEnumerable<Rating> Ratings { get; } = new HashSet<Rating>();

        public virtual IEnumerable<Comment> Comments { get; } = new HashSet<Comment>();
    }
}
