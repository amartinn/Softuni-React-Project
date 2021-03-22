namespace Movies.Server.Data
{
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using Models;
    using Models.Base;
    using System;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class MoviesDbContext : IdentityDbContext<User>
    {
        public MoviesDbContext(DbContextOptions<MoviesDbContext> options)
            : base(options)
        {

        }

        public DbSet<Movie> Movies { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public DbSet<Rating> Ratings { get; set; }

        public DbSet<UserMovies> UserMovies { get; set; }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            this.ApplyAuditInformation();

            return base.SaveChanges(acceptAllChangesOnSuccess);
        }
        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = new CancellationToken())
        {
            this.ApplyAuditInformation();

            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<UserMovies>()
                .HasKey(um => new { um.UserId, um.MovieId });

            builder.Entity<Movie>()
                .HasMany(x => x.UserMovies)
                .WithOne(x => x.Movie)
                .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(builder);
        }

        private void ApplyAuditInformation()
           => this.ChangeTracker
               .Entries()
               .ToList()
               .ForEach(entry =>
               {

                   if (entry.Entity is IDeletableEntity deletableEntity)
                   {
                       if (entry.State == EntityState.Deleted)
                       {
                           deletableEntity.DeletedOn = DateTime.UtcNow;
                           deletableEntity.IsDeleted = true;

                           entry.State = EntityState.Modified;

                           return;
                       }
                   }

                   if (entry.Entity is IAuditInfo entity)
                   {
                       if (entry.State == EntityState.Added)
                       {
                           entity.CreatedOn = DateTime.UtcNow;
                       }
                       else if (entry.State == EntityState.Modified)
                       {
                           entity.ModifiedOn = DateTime.UtcNow;
                       }
                   }
               });
    }
}
