import React from 'react';

import HomeItemCard from '../item-card/Item-card';

const VehicleCardsColumn = ({vehicles}) =>{

    return(
      <div className="container">
        <ul>
          {
            vehicles.slice(0, 10).map((vehicle, index) =>
              <li key={index}>
                <HomeItemCard vehicle={vehicle} />                
              </li>)
          }
        </ul>
      </div>
    )
  
}

export default VehicleCardsColumn;