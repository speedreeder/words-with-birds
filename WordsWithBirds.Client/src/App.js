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

    const joinFlock = async (e) => {
        e.preventDefault()
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
        setFlock('');
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
                <form onSubmit={e => joinFlock(e)}>
                    <input
                        style={{ textTransform: 'uppercase' }}
                        placeholder="FLOCK"
                        onChange={evt => setFlock(evt.target.value.toUpperCase())}
                        disabled={!connected}
                    />
                    <button type="submit" disabled={!connected || !flock}>Join Flock</button>
                </form>
            }

            {foundFlock &&
                <div>
                    <Game connection={connection} flock={serverFlock} />

                    <h1 style={{ color: 'rgba(255, 255, 255, .5)' }}>{serverFlock}</h1>
                    <button onClick={leaveFlock}>Leave Flock</button>
                </div>
            }

            <p style={{ color: 'rgba(255, 255, 255, .5)', position: 'fixed', bottom: 50 }}>Built with love for Abigail</p>
        </div>
    )
}

export default App;
