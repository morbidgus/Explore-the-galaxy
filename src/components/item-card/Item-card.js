import './Item-card.styles.css';
import { Link } from "react-router-dom";

const getId = (url) => {
  let id = url.slice(34);
  return id;
}; 

const ItemCard = ({character, vehicle}) => {
  return (
  <Link to={`/character?id=${getId(character.url)}`}  className="card-container" >
    <span className="name-container">
      {
        character ?

        character.name : vehicle.name
        
      }
    </span>
  </Link>
  )
}

export default ItemCard;