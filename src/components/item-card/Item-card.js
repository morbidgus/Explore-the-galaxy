import './Item-card.styles.css';

const ItemCard = ({character, vehicle}) => {
  return(
  <div className="card-container">
    <span className="name-container">
      {
        character ?

        character.name : vehicle.name
        
      }
    </span>
  </div>
  )
}

export default ItemCard;