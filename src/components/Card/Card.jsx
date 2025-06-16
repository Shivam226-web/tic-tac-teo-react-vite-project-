import Icon from "../Icon/Icon";
import './Card.css';

function card({ iconName }){
 return(
    <div className="card">
        
         <Icon name={ iconName }/>
        
    </div>
 )
}
export default card;