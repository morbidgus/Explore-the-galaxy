import './home-item-card.styles.css';

const HomeItemCard = ({character, vehicle}) => {
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

export default HomeItemCard;