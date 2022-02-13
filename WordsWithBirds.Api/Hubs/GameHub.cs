using Microsoft.AspNetCore.SignalR;
using System.Collections.Concurrent;
using WordsWithBirds.Api.Models;

namespace WordsWithBirds.Api.Hubs
{
    public class GameHub : Hub<IGameClient>
    {
        private static IHubContext<GameHub, IGameClient> _hubContext;
        private readonly ConcurrentDictionary<string, Bird> _birds;
        private readonly ConcurrentDictionary<string, Flock> _flocks;

        public GameHub(IHubContext<GameHub, IGameClient> hubContext, ConcurrentDictionary<string, Bird> birds, ConcurrentDictionary<string, Flock> flocks)
        {
            _hubContext = hubContext;
            _birds = birds;
            _flocks = flocks;
        }

        public async Task ResetTimer()
        {
            var bird = _birds[Context.ConnectionId];

            bird.Flock.SecondsElapsed = 0;

            if(bird.Flock.Timer != null)
            {
                bird.Flock.Timer.Dispose();
            }

            bird.Flock.Timer = new CustomTimer(1000, bird.Flock.Name);
            bird.Flock.Timer.Elapsed += OnTimerTick;
            bird.Flock.Timer.Stop();

            await Clients.Group(bird.Flock.Name).ReceiveTimer(new TimerState { SecondsRemaining = TimeSpan.FromSeconds(180 - bird.Flock.SecondsElapsed) });
        }

        public void StartTimer()
        {
            var bird = _birds[Context.ConnectionId];

            if (bird.Flock.Timer != null && !bird.Flock.Timer.Enabled && bird.Flock.SecondsElapsed < 180)
            {
                bird.Flock.Timer.Start();
            }
        }

        public async Task GetTimer()
        {
            var bird = _birds[Context.ConnectionId];

            if (bird.Flock.Timer != null)
            {
                await Clients.Group(bird.Flock.Name).ReceiveTimer(new TimerState { SecondsRemaining = TimeSpan.FromSeconds(180 - bird.Flock.SecondsElapsed)});
            }
        }

        async void OnTimerTick(object sender, System.Timers.ElapsedEventArgs e)
        {
            var timer = sender as CustomTimer;
            var flock = _flocks[timer.FlockName];
            flock.SecondsElapsed++;

            if (flock.SecondsElapsed == 180)
            {
                flock.Timer.Stop();
                await _hubContext.Clients.Group(timer.FlockName).ReceiveTimer(new TimerState { SecondsRemaining = TimeSpan.FromSeconds(180 - flock.SecondsElapsed), IsRunning = false });
            }
            else
            {
                await _hubContext.Clients.Group(timer.FlockName).ReceiveTimer(new TimerState { SecondsRemaining = TimeSpan.FromSeconds(180 - flock.SecondsElapsed), IsRunning = true });
            }
        }

        public async Task StopTimer()
        {
            var bird = _birds[Context.ConnectionId];

            if (bird.Flock.Timer != null)
            {
                bird.Flock.Timer.Stop();

                await Clients.Group(bird.Flock.Name).ReceiveTimer(new TimerState { SecondsRemaining = TimeSpan.FromSeconds(180 - bird.Flock.SecondsElapsed), IsRunning = false });
            }
        }

        public async Task GetCurrentGameBoard()
        {
            var bird = _birds[Context.ConnectionId];


            if (bird.Flock.Board != null)
            {
                await Clients.Group(bird.Flock.Name).ReceiveGameBoard(bird.Flock.Board);
            }
        }

        public async Task GetNewGameBoard()
        {
            var bird = _birds[Context.ConnectionId];

            bird.Flock.Board = new GameBoard();
            await ResetTimer();
            StartTimer();
            await Clients.Group(bird.Flock.Name).ReceiveGameBoard(bird.Flock.Board);
        }

        public async Task JoinFlock(string flockName)
        {
            var bird = _birds.GetOrAdd(Context.ConnectionId, new Bird());

            await Groups.AddToGroupAsync(Context.ConnectionId, flockName);
            var flock = _flocks.GetOrAdd(flockName, new Flock(flockName));
            bird.Flock = flock;
            await Clients.Client(Context.ConnectionId).ReceiveFlockName(flockName);

        }
        
        public async Task LeaveFlock()
        {
            if (_birds.TryGetValue(Context.ConnectionId, out Bird bird) && bird.Flock != null)
            {
                // flock exists and there are no more birds in it
                if (_flocks.Any(f => f.Key == bird.Flock.Name) && _birds.Where(b => b.Key != Context.ConnectionId).All(b => b.Value.Flock?.Name != bird.Flock.Name))
                {
                    await StopTimer();
                    _flocks.Remove(bird.Flock.Name, out _);
                }

                await Groups.RemoveFromGroupAsync(Context.ConnectionId, bird.Flock.Name);
                _birds.Remove(Context.ConnectionId, out _);
            }
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await LeaveFlock();

            await base.OnDisconnectedAsync(exception);
        }

        public override Task OnConnectedAsync()
        {
            _birds[Context.ConnectionId] = new Bird();

            return base.OnConnectedAsync();
        }
    }
}
