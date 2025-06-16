
import { useState } from "react";
import Card from "../card/Card"

import './Grid.css';

function Grid({numberOfCard}){
    const[turn , setTurn] = useState(true); //flase value =>X turn , true value =>O turn
    const[board , setBoard] = useState(Array(numberOfCard).fill(""))
    function play(index){
        console.log("moved play", index);
        if(turn === true){
            board[index] = 'O';
        }else{
            board[index] = 'X';
        }
        setBoard([...board]);
        setTurn(!turn);
        
    }

    return(
        <>
        <h1 className="turn-highlight"> Current Turn: {(turn) ? 'O' : 'X'} </h1>
        <div className="grid">

        {board.map((value , idx)=>{
            return<Card onPlay={play} player={value}  key={idx} index={idx}/>
        })}
        </div>
        </>
        

    )


}
export default Grid;
