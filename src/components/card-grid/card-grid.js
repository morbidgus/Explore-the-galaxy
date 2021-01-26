import './card-grid.styles.css';

import ItemCard from '../item-card/Item-card';

const CardGrid = ({ characters, currentPage, elementsPerPage }) => {

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = characters.slice(indexOfFirstElement, indexOfLastElement);

  return(
    <ul className="grid-container">
      {
        currentElements.map(character => 
          <li key={character.url} >
            <ItemCard character={character}/>
          </li>)
      }
    </ul>
  )

}

export default CardGrid;