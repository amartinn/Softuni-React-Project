namespace Movies.Server.Infrastructure.Services
{
    public class Result
    {
        public bool Succeeded { get; private set; }

        public bool Failure => !this.Succeeded;

        public string Error { get; private set; }

        public static implicit operator Result(bool succeeded)
            => new()
            { Succeeded = succeeded };

        public static implicit operator Result(string error)
            => new()
            {
                Succeeded = false,
                Error = error
            };
    }
}
