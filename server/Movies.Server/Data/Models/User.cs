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
        }

        public IEnumerable<UserMovies> UserMovies { get; set; }

        public DateTime CreatedOn { get; set; }
        public DateTime? ModifiedOn { get; set; }
    }
}
