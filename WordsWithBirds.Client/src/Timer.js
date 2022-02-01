import React from 'react';

const Timer = (props) => (
    <div style={{ background: "#eee", borderRadius: '5px', padding: '0 10px' }}>
        <p><strong>{props.timer?.secondsRemaining ?? "00:00:00"}</strong></p>
    </div>
);

export default Timer;