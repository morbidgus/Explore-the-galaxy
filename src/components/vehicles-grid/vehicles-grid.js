import './vehicles-grid.styles.css';

import ItemCard from '../item-card/Item-card';

const VehiclesGrid = ({ vehicles, currentPage, elementsPerPage }) => {

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = vehicles.slice(indexOfFirstElement, indexOfLastElement);

  return(
    <ul className="vehicles-grid-container">
      {
        currentElements.map(vehicle => 
          <li key={vehicle.url} >
            <ItemCard vehicle={vehicle}/>
          </li>)
      }
    </ul>
  )

}

export default VehiclesGrid;