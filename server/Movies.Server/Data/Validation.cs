namespace Movies.Server.Data
{
    public class Validation
    {
        public class Comment
        {
            public const int MaxBodyLength = 40;
        }

        public class Rating
        {
            public const int MinValue = 1;

            public const int MaxValue = 5;
        }
    }
}
