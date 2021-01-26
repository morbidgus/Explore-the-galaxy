import './card-grid.styles.css';

import ItemCard from '../item-card/Item-card';

const CardGrid = ({ characters }) => {
  return(
    <ul className="grid-container">
      {
        characters.map(character => 
          <li key={character.url} >
            <ItemCard character={character}/>
          </li>)
      }
    </ul>
  )

}

export default CardGrid;