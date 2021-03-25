using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movies.Server.Infrastructure
{
    public static class ConstantMessages
    {
        public static class Success
        {
            public const string RegisterMessage = "Successfully Registered.";

            public const string LoginMessage = "Successfully Logged in.";
        }

        public static class Error
        {
            public const string InvalidCredentials = "Invalid credentials!";
        }

    }
}
