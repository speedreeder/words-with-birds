using Microsoft.AspNetCore.SignalR;
using WordsWithBirds.Api.Hubs;

namespace WordsWithBirds.Api.Models
{
    public class CustomTimer : System.Timers.Timer
    {
        public CustomTimer(double interval)
            : base(interval)
        {
        }

        public IHubCallerClients<IGameClient> GameHubClients { get; set; }
    }
}
