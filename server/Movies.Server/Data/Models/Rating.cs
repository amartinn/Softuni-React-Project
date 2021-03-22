namespace Movies.Server.Data.Models
{
    using Movies.Server.Data.Models.Base;
    using System;
    using System.ComponentModel.DataAnnotations;

    using static Validation.Rating;

    public class Rating : BaseModel<string>
    {
        [Required]
        [Range(MinValue, MaxValue)]
        public int Value { get; set; }

        [Required]
        public string RatedById { get; set; }

        public User RatedBy { get; set; }

        [Required]
        public int RatedMovieId { get; set; }

        public Movie RatedMovie { get; set; }

    }
}
