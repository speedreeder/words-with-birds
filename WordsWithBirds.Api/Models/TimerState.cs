namespace WordsWithBirds.Api.Models
{
    public class TimerState
    {
        public TimeSpan SecondsRemaining { get; set; }
        public bool IsRunning { get; set; }
    }
}
