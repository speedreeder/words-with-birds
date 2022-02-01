using WordsWithBirds.Api.Models;

namespace WordsWithBirds.Api.Hubs
{
    public interface IGameClient
    {
        Task ReceiveTimer(TimerState timerState);
        Task ReceiveGameBoard(GameBoard gameBoard);
    }
}
