namespace WordsWithBirds.Api.Models
{
    public class CustomTimer : System.Timers.Timer
    {
        public CustomTimer(double interval, string flockName)
            : base(interval)
        {
            FlockName = flockName;
        }

        public string FlockName { get; }
    }
}
