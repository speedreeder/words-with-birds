using WordsWithBirds.Api.Models;

namespace WordsWithBirds.Api
{
    public class Flock
    {
        public Flock(string name)
        {
            Name = name;
        }

        public string Name { get; set; }
        public CustomTimer Timer { get; set; }
        public GameBoard Board { get; set; }
        public int SecondsElapsed;
    }
}
