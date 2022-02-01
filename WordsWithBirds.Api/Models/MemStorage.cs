namespace WordsWithBirds.Api.Models
{
    public static class MemStorage
    {
        public static CancellationTokenSource TimerCancellationTokenSource;
        public static System.Timers.Timer Timer;
        public static int SecondsElapsed;
        public static GameBoard CurrentGameBoard;
    }
}
