import React from 'react';

const GameBoard = (props) => {
    let timerExpired = props.timer?.secondsRemaining === "00:00:00";

    return (
        <div id="letter-board" style={{ margin: "20px" }}>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row1[0]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row1[1]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row1[2]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row1[3]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row1[4]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row2[0]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row2[1]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row2[2]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row2[3]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row2[4]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row3[0]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row3[1]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row3[2]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row3[3]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row3[4]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row4[0]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row4[1]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row4[2]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row4[3]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row4[4]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row5[0]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row5[1]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row5[2]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row5[3]} </span></div>
            <div className="letter-tile"><span style={{color: timerExpired ? 'crimson' : 'black'}}> {props.gameboard?.row5[4]} </span></div>
        </div >
    )
}

export default GameBoard;