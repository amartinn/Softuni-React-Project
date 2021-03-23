namespace Movies.Server.Features.Ratings.Models
{
    using System.ComponentModel.DataAnnotations;
    using static Data.Validation.Rating;

    public class RatingRequestModel
    {
        [Required]
        [Range(MinValue, MaxValue)]
        public int Value { get; set; }

        [Required]
        public int MovieId { get; set; }
    }
}
