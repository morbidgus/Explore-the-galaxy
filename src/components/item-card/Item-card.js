import './Item-card.styles.css';
import { Link } from "react-router-dom";

const getId = (url) => {
  let id = url.slice(34);
  return id;
}; 

const ItemCard = ({character, vehicle}) => {
  return(
    <>
    {
      character ?
        <Link to={`/character?id=${getId(character.url)}`}  className="card-container" >
          <span className="name-container">{character.name}</span>
        </Link>
        :
        <Link to={`/vehicle?id=${getId(vehicle.url.slice(2))}`}  className="card-container" >
          <span className="name-container">{vehicle.name}</span>
        </Link>

    }
    </>
  )
}

export default ItemCard;