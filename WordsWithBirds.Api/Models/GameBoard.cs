namespace WordsWithBirds.Api.Models
{
    public class GameBoard
    {
        public GameBoard()
        {
            var x = DieConst.GetDieList();

            var r1 = x.Shuffle().Take(5);
            x.RemoveKeyRange(r1.Select(r => r.Key).ToList());
            Row1 = r1.Select(r => r.Value.Shuffle().First()).ToList();


            var r2 = x.Shuffle().Take(5);
            x.RemoveKeyRange(r2.Select(r => r.Key).ToList());
            Row2 = r2.Select(r => r.Value.Shuffle().First()).ToList();


            var r3 = x.Shuffle().Take(5);
            x.RemoveKeyRange(r3.Select(r => r.Key).ToList());
            Row3 = r3.Select(r => r.Value.Shuffle().First()).ToList();


            var r4 = x.Shuffle().Take(5);
            x.RemoveKeyRange(r4.Select(r => r.Key).ToList());
            Row4 = r4.Select(r => r.Value.Shuffle().First()).ToList();


            var r5 = x.Shuffle().Take(5);
            x.RemoveKeyRange(r5.Select(r => r.Key).ToList());
            Row5 = r5.Select(r => r.Value.Shuffle().First()).ToList();
        }

        public List<string> Row1 { get; set; }
        public List<string> Row2 { get; set; }
        public List<string> Row3 { get; set; }
        public List<string> Row4 { get; set; }
        public List<string> Row5 { get; set; }
    }
}
