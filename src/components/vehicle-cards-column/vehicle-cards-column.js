import React from 'react';
import axios from 'axios';

import ItemCard from '../item-card/Item-card';

class VehicleCardsColumn extends React.Component{
  constructor(){
    super();

    this.state = {
      vehicles: [],
    }
  }

  componentDidMount(){
    axios.get(`https://swapi.py4e.com/api/vehicles/`).then(res => {
        this.setState({vehicles: res.data.results})
      })
  }

  render(){
    return(
      <div className="container">
        <ul>
          {
            this.state.vehicles.map(vehicle =>
              <li key={vehicle.url}>
                <ItemCard vehicle={vehicle} />                
              </li>)
          }
        </ul>
      </div>
    )
  }
}

export default VehicleCardsColumn;