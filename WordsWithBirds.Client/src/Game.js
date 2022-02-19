import React, { useState, useEffect } from 'react';

import GameBoard from './GameBoard';
import Timer from './Timer';

const Game = (props) => {
    const [timer, setTimer] = useState(null);
    const [gameboard, setGameBoard] = useState(null);
    const [localGameBoardSize, setLocalGameBoardSize] = useState("5");

    useEffect(async () => {
        if (props.connection && props.connection._connectionStarted) {
            props.connection.on('ReceiveTimer', timer => {
                setTimer(timer);
            });

            props.connection.on('ReceiveGameBoard', gameboard => {
                setGameBoard(gameboard);
                setLocalGameBoardSize(gameboard.gameSize.toString())
            });

            await props.connection.send('GetTimer');
            await props.connection.send('GetCurrentGameBoard');
        }
    }, []);

    const startTimer = async () => {
        if (props.connection._connectionStarted) {
            try {
                await props.connection.send('StartTimer');
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }

    const stopTimer = async () => {
        if (props.connection._connectionStarted) {
            try {
                await props.connection.send('StopTimer');
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }

    const resetTimer = async () => {
        if (props.connection._connectionStarted) {
            try {
                await props.connection.send('ResetTimer');
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }

    const getNewBoard = async () => {
        if (props.connection._connectionStarted) {
            try {
                await props.connection.send('GetNewGameBoard', parseInt(localGameBoardSize));
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }

    return (
        <div>
            <Timer timer={timer} />
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
            <button onClick={resetTimer}>Reset Timer</button>

            <GameBoard gameboard={gameboard} timer={timer} />
            <div onChange={evt => setLocalGameBoardSize(evt.target.value)} style={{ background: "#eee", borderRadius: '5px', padding: '0 10px', margin: "0 0 20px 0" }}>
                <input type="radio" name="boardSize" defaultChecked={ localGameBoardSize !== "6" } id="5x5" value="5" />
                <label htmlFor="5x5" style={{ margin: "0 20px 0 0" }}>5x5</label>

                <input type="radio" name="boardSize" defaultChecked={ localGameBoardSize === "6"  } id="6x6" value="6" />
                <label htmlFor="6x6">6x6</label>
            </div>

            <button onClick={getNewBoard}>Get New Board</button>
        </div>
    )
}

export default Game;
