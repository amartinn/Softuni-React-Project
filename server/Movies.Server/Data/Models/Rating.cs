namespace Movies.Server.Data.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using Movies.Server.Data.Models.Base;
    using static Validation.Rating;

    public class Rating : BaseModel<string>
    {
        public Rating()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        [Required]
        [Range(MinValue, MaxValue)]
        public int Value { get; set; }

        [Required]
        public string RatedById { get; set; }

        public virtual User RatedBy { get; set; }

        [Required]
        public int RatedMovieId { get; set; }

        public virtual Movie RatedMovie { get; set; }
    }
}
