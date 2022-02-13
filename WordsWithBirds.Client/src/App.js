import './App.css';
import Game from './Game';
import { HubConnectionBuilder } from '@microsoft/signalr';
import React, { useState, useEffect } from 'react';


function App() {
    const [connection, setConnection] = useState(null);
    const [flock, setFlock] = useState('');
    const [serverFlock, setServerFlock] = useState('');
    const [connected, setConnected] = useState(false);
    const [foundFlock, setFoundFlock] = useState(false);

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(`${process.env.REACT_APP_SERVER_URL}/hubs/game`)
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(async () => {

                    setConnected(connection?._connectionStarted);
                    console.log('Connected!');
                    connection.on('ReceiveFlockName', flock => {
                        setServerFlock(flock);
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    useEffect(() => {
        setFoundFlock(connected && serverFlock);
    }, [connected, serverFlock])

    const joinFlock = async () => {
        if (connection._connectionStarted) {
            try {
                await connection.send('JoinFlock', flock);
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }

    const leaveFlock = async () => {
        if (connection._connectionStarted) {
            try {
                await connection.send('LeaveFlock');
                setServerFlock('');

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
        <div id="App">
            {!foundFlock &&
                <div>
                <input onChange={evt => setFlock(evt.target.value)} disabled={!connected} />
                <button disabled={!connected || !flock} onClick={joinFlock}>Join Flock</button>
                </div>
            }

            {foundFlock &&
                <div>
                    <Game connection={connection} flock={serverFlock} />

                <h1 style={{ color: 'rgba(255, 255, 255, .5)' }}>{serverFlock}</h1>
                    <button onClick={leaveFlock}>Leave Flock</button>
                </div>
            }
        </div>
    )
}

export default App;
