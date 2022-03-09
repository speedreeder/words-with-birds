import React from 'react';

const GameBoard = (props) => {
    let timerExpired = props.timer?.secondsRemaining === "00:00:00";

    return (
        <div>
            {props.gameboard?.gameSize === 6 &&
                <div id="letter-board-6" style={{ margin: "20px" }}>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row1[0]) ? props.gameboard?.row1[0] : String.fromCharCode(props.gameboard?.row1[0])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row1[1]) ? props.gameboard?.row1[1] : String.fromCharCode(props.gameboard?.row1[1])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row1[2]) ? props.gameboard?.row1[2] : String.fromCharCode(props.gameboard?.row1[2])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row1[3]) ? props.gameboard?.row1[3] : String.fromCharCode(props.gameboard?.row1[3])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row1[4]) ? props.gameboard?.row1[4] : String.fromCharCode(props.gameboard?.row1[4])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row1[5]) ? props.gameboard?.row1[5] : String.fromCharCode(props.gameboard?.row1[5])} </span></div>

                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row2[0]) ? props.gameboard?.row2[0] : String.fromCharCode(props.gameboard?.row2[0])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row2[1]) ? props.gameboard?.row2[1] : String.fromCharCode(props.gameboard?.row2[1])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row2[2]) ? props.gameboard?.row2[2] : String.fromCharCode(props.gameboard?.row2[2])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row2[3]) ? props.gameboard?.row2[3] : String.fromCharCode(props.gameboard?.row2[3])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row2[4]) ? props.gameboard?.row2[4] : String.fromCharCode(props.gameboard?.row2[4])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row2[5]) ? props.gameboard?.row2[5] : String.fromCharCode(props.gameboard?.row2[5])} </span></div>

                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row3[0]) ? props.gameboard?.row3[0] : String.fromCharCode(props.gameboard?.row3[0])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row3[1]) ? props.gameboard?.row3[1] : String.fromCharCode(props.gameboard?.row3[1])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row3[2]) ? props.gameboard?.row3[2] : String.fromCharCode(props.gameboard?.row3[2])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row3[3]) ? props.gameboard?.row3[3] : String.fromCharCode(props.gameboard?.row3[3])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row3[4]) ? props.gameboard?.row3[4] : String.fromCharCode(props.gameboard?.row3[4])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row3[5]) ? props.gameboard?.row3[5] : String.fromCharCode(props.gameboard?.row3[5])} </span></div>

                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row4[0]) ? props.gameboard?.row4[0] : String.fromCharCode(props.gameboard?.row4[0])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row4[1]) ? props.gameboard?.row4[1] : String.fromCharCode(props.gameboard?.row4[1])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row4[2]) ? props.gameboard?.row4[2] : String.fromCharCode(props.gameboard?.row4[2])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row4[3]) ? props.gameboard?.row4[3] : String.fromCharCode(props.gameboard?.row4[3])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row4[4]) ? props.gameboard?.row4[4] : String.fromCharCode(props.gameboard?.row4[4])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row4[5]) ? props.gameboard?.row4[5] : String.fromCharCode(props.gameboard?.row4[5])} </span></div>

                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row5[0]) ? props.gameboard?.row5[0] : String.fromCharCode(props.gameboard?.row5[0])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row5[1]) ? props.gameboard?.row5[1] : String.fromCharCode(props.gameboard?.row5[1])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row5[2]) ? props.gameboard?.row5[2] : String.fromCharCode(props.gameboard?.row5[2])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row5[3]) ? props.gameboard?.row5[3] : String.fromCharCode(props.gameboard?.row5[3])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row5[4]) ? props.gameboard?.row5[4] : String.fromCharCode(props.gameboard?.row5[4])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row5[5]) ? props.gameboard?.row5[5] : String.fromCharCode(props.gameboard?.row5[5])} </span></div>

                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row6[0]) ? props.gameboard?.row6[0] : String.fromCharCode(props.gameboard?.row6[0])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row6[1]) ? props.gameboard?.row6[1] : String.fromCharCode(props.gameboard?.row6[1])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row6[2]) ? props.gameboard?.row6[2] : String.fromCharCode(props.gameboard?.row6[2])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row6[3]) ? props.gameboard?.row6[3] : String.fromCharCode(props.gameboard?.row6[3])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row6[4]) ? props.gameboard?.row6[4] : String.fromCharCode(props.gameboard?.row6[4])} </span></div>
                    <div className="letter-tile-6"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {isNaN(props.gameboard?.row6[5]) ? props.gameboard?.row6[5] : String.fromCharCode(props.gameboard?.row6[5])} </span></div>

                </div>
            }

            {props.gameboard?.gameSize !== 6 &&
                <div id="letter-board-5" style={{ margin: "20px" }}>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row1[0]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row1[1]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row1[2]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row1[3]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row1[4]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row2[0]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row2[1]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row2[2]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row2[3]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row2[4]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row3[0]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row3[1]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row3[2]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row3[3]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row3[4]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row4[0]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row4[1]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row4[2]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row4[3]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row4[4]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row5[0]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row5[1]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row5[2]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row5[3]} </span></div>
                    <div className="letter-tile-5"><span style={{ color: timerExpired ? 'crimson' : 'black' }}> {props.gameboard?.row5[4]} </span></div>
                </div>
            }
            
        </div>
    )
}

export default GameBoard;