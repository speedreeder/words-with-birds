import React, { useState, useEffect } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

import GameBoard from './GameBoard';
import Timer from './Timer';

const Game = () => {
    const [connection, setConnection] = useState(null);
    const [timer, setTimer] = useState(null);
    const [gameboard, setGameBoard] = useState(null);

    useEffect(async () => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:7156/hubs/game')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(async result => {
                    console.log('Connected!');

                    connection.on('ReceiveTimer', timer => {
                        setTimer(timer);
                    });

                    connection.on('ReceiveGameBoard', gameboard => {
                        setGameBoard(gameboard);
                    });

                    await connection.send('GetTimer');
                    await connection.send('GetCurrentGameBoard');

                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    const startTimer = async () => {
        if (connection._connectionStarted) {
            try {
                await connection.send('StartTimer');
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
        if (connection._connectionStarted) {
            try {
                await connection.send('StopTimer');
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
        if (connection._connectionStarted) {
            try {
                await connection.send('ResetTimer');
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
        if (connection._connectionStarted) {
            try {
                await connection.send('GetNewGameBoard');
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

            <GameBoard  gameboard={gameboard} />

            <button onClick={getNewBoard}>Get New Board</button>
        </div>
    );
}

export default Game;
