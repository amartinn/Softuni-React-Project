namespace Movies.Server.Data.Models
{
    using Microsoft.AspNetCore.Identity;
    using Movies.Server.Data.Models.Base;
    using System;
    using System.Collections.Generic;

    public class User : IdentityUser, IAuditInfo
    {
        public User()
        {
            this.Id = Guid.NewGuid().ToString();
            this.UserMovies = new HashSet<UserMovies>();
            this.Comments = new HashSet<Comment>();
            this.Ratings = new HashSet<Rating>();
        }

        public virtual IEnumerable<UserMovies> UserMovies { get; set; }

        public virtual IEnumerable<Comment> Comments { get; set; }

        public virtual IEnumerable<Rating> Ratings { get; set; }

        public DateTime CreatedOn { get; set; }
        public DateTime? ModifiedOn { get; set; }
    }
}
