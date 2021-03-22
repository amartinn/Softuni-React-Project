namespace Movies.Server.Data.Models
{
    using Movies.Server.Data.Models.Base;
    using System.Collections.Generic;

    public class Movie : BaseDeletableModel<int>
    {
        public IEnumerable<UserMovies> UserMovies { get; set; } = new HashSet<UserMovies>();

        public IEnumerable<Rating> Ratings { get; } = new HashSet<Rating>();

        public IEnumerable<Comment> Comments { get; } = new HashSet<Comment>();
    }
}
