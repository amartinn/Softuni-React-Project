namespace Movies.Server.Data.Models
{
    using Microsoft.AspNetCore.Identity;
    using Movies.Server.Data.Models.Base;
    using System;
    public class User : IdentityUser, IAuditInfo
    {
        public User()
        {
            this.Id = Guid.NewGuid().ToString();
        }
        public DateTime CreatedOn { get; set; }
        public DateTime? ModifiedOn { get; set; }
    }
}
