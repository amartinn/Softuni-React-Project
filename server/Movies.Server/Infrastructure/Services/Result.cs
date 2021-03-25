namespace Movies.Server.Infrastructure.Services
{
    using Utilities;
    public class Result
    {
        public bool Succeeded { get; private set; }

        public bool Failure => !this.Succeeded;

        public ErrorResponseModel Error { get; private set; }

        public static implicit operator Result(bool succeeded)
            => new()
            { Succeeded = succeeded };

        public static implicit operator Result(string error)
            => new()
            {
                Succeeded = false,
                Error = new ErrorResponseModel { Error = error },
            };
    }
}
