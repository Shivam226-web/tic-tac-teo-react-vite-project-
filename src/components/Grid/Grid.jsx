
import { useState } from "react";
import Card from "../card/Card"
import isWinner from "../../helpers/checkWinner";
import { ToastContainer, toast } from 'react-toastify';
import './Grid.css';
import "react-toastify/dist/ReactToastify.css";


function Grid({numberOfCard}){
    const[turn , setTurn] = useState(true); //flase value =>X turn , true value =>O turn
    const[board , setBoard] = useState(Array(numberOfCard).fill(""))
    const[winner , setWinner] = useState(null);
    function play(index){
        console.log("moved play", index);
        if(turn === true){
            board[index] = 'O';
        }else{
            board[index] = 'X';
        }
        const win =isWinner(board, turn ? "O" : "X")
        if(win){
            setWinner(win);
            toast.success(`Congraculation ${win} win the game`);
        }
        setBoard([...board]);
        setTurn(!turn);
        
    }
    function reset(){
        setBoard(Array(numberOfCard).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return(
        <div className="grid-wrapper">
           {winner &&(
            <>
            <h1 className="turn-highlight">winner is  {winner}</h1>
            <button className="reset" onClick={reset}>Reset Game </button>
            <ToastContainer  position="top-center"/>
            </>
            )}
        <h1 className="turn-highlight"> Current Turn: {(turn) ? 'O' : 'X'} </h1>
        <div className="grid">

        {board.map((value , idx)=>{
            return<Card onPlay={play} player={value}  key={idx} index={idx}/>
        })}
        </div>
        </div>
        

    )


}
export default Grid;
