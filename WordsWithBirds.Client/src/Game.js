import React, { useState, useEffect } from 'react';

import GameBoard from './GameBoard';
import Timer from './Timer';

const Game = (props) => {
    const [timer, setTimer] = useState(null);
    const [gameboard, setGameBoard] = useState(null);

    useEffect(async () => {
        if (props.connection && props.connection._connectionStarted) {
            props.connection.on('ReceiveTimer', timer => {
                setTimer(timer);
            });

            props.connection.on('ReceiveGameBoard', gameboard => {
                setGameBoard(gameboard);
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
                await props.connection.send('GetNewGameBoard');
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

            <button onClick={getNewBoard}>Get New Board</button>
        </div>
    )
}

export default Game;
