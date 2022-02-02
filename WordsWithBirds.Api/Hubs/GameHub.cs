using Microsoft.AspNetCore.SignalR;
using WordsWithBirds.Api.Models;

namespace WordsWithBirds.Api.Hubs
{
    public class GameHub : Hub<IGameClient>
    {
        private static IHubContext<GameHub, IGameClient> _hubContext;

        public GameHub(IHubContext<GameHub, IGameClient> hubContext)
        {
            _hubContext = hubContext;
        }

        public async Task ResetTimer()
        {
            MemStorage.SecondsElapsed = 0;

            if(MemStorage.Timer != null)
            {
                MemStorage.Timer.Dispose();
            }

            MemStorage.Timer = new CustomTimer(1000) { GameHubClients = Clients };
            MemStorage.Timer.Elapsed += OnTimerTick;
            MemStorage.Timer.Stop();

            await Clients.All.ReceiveTimer(new TimerState { SecondsRemaining = TimeSpan.FromSeconds(180 - MemStorage.SecondsElapsed) });
        }

        public void StartTimer()
        {
            if(MemStorage.Timer != null && !MemStorage.Timer.Enabled && MemStorage.SecondsElapsed < 180)
            {
                MemStorage.Timer.Start();
            }
        }

        public async Task GetTimer()
        {
            if (MemStorage.Timer != null)
            {
                await Clients.All.ReceiveTimer(new TimerState { SecondsRemaining = TimeSpan.FromSeconds(180 - MemStorage.SecondsElapsed)});
            }
        }

        static async void OnTimerTick(object sender, System.Timers.ElapsedEventArgs e)
        {
            Console.WriteLine("test");

            MemStorage.SecondsElapsed++;

            if (MemStorage.SecondsElapsed == 180)
            {
                MemStorage.Timer.Stop();
                await _hubContext.Clients.All.ReceiveTimer(new TimerState { SecondsRemaining = TimeSpan.FromSeconds(180 - MemStorage.SecondsElapsed), IsRunning = false });
            }
            else
            {
                await _hubContext.Clients.All.ReceiveTimer(new TimerState { SecondsRemaining = TimeSpan.FromSeconds(180 - MemStorage.SecondsElapsed), IsRunning = true });
            }
        }

        public async Task StopTimer()
        {
            if(MemStorage.Timer != null)
            {
                MemStorage.Timer.Stop();

                await Clients.All.ReceiveTimer(new TimerState { SecondsRemaining = TimeSpan.FromSeconds(180 - MemStorage.SecondsElapsed), IsRunning = false });
            }
        }

        public async Task GetCurrentGameBoard()
        {
            if (MemStorage.CurrentGameBoard != null)
            {
                await Clients.All.ReceiveGameBoard(MemStorage.CurrentGameBoard);
            }
        }

        public async Task GetNewGameBoard()
        {
            MemStorage.CurrentGameBoard = new GameBoard();
            await ResetTimer();
            StartTimer();
            await Clients.All.ReceiveGameBoard(MemStorage.CurrentGameBoard);
        }
    }
}
