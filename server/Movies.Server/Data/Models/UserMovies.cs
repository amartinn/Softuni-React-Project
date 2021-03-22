namespace Movies.Server.Data.Models
{
    public class UserMovies
    {
        public string UserId { get; set; }

        public virtual User User { get; set; }

        public int MovieId { get; set; }

        public virtual Movie Movie { get; set; }
    }
}
