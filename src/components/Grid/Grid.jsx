
import Card from "../card/Card"

import './Grid.css';

function Grid({numberOfCard}){

    return(
        <div className="grid">

        {Array(numberOfCard).fill(<Card/>).map((el , idx)=>{
            return<Card key={idx}/>
        })}
        </div>
        

    )


}
export default Grid;
