namespace Movies.Server.Features.Movies.Models
{
    using System.ComponentModel.DataAnnotations;
    public class MovieListingServiceModel
    {
        [Required]
        public int Id { get; set; }
    }
}
