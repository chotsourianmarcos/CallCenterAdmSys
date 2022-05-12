using System;
using System.Collections.Generic;
using System.Text;

namespace Logic
{
    public class InvalidClientInfo : Exception
    {
        public InvalidClientInfo(string message) { }
    }
    public class InsertClientError : Exception
    {
        public InsertClientError(string message) { }
    }
    public class UpdateClientError : Exception
    {
        public UpdateClientError(string message) { }
    }
}
