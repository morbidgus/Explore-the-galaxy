import React from 'react';
import axios from 'axios';
import './Vehicles-page.styles.css';
import VehiclesSectionTitle from '../../components/vehicles-section-title/vehicles-section-title';
import CardGrid from '../../components/card-grid/card-grid';
import Pagination from '../../components/pagination/pagination';

class VehiclesPage extends React.Component{
  constructor(){
    super()

    this.state = {
      vehicles: [],
      currentPage: 1,
      elementsPerPage: 20,
      vehicleClass: ''
    }
  }

  componentDidMount(){
    function getAllStarwarsVehicles() {
      let vehicles = [];

      return axios("https://swapi.py4e.com/api/vehicles/")
        .then(response => {
          vehicles = response.data.results;
          return response.data.count;
        })
        .then(count => {
          const numberOfPagesLeft = Math.ceil((count - 1) / 10);
          let promises = [];

          for (let i = 2; i <= numberOfPagesLeft; i++) {
            promises.push(axios(`https://swapi.py4e.com/api/vehicles?page=${i}`));
          }
          return Promise.all(promises);
        })
        .then(response => {
          vehicles = response.reduce((acc, data) => [...acc, ...data.data.results], vehicles);
          return vehicles;
        })
        .catch(error => console.log("Something wrong. Please refresh the page and try again."));
    }
  
  (async () => {
      const starwarsVehicles = await getAllStarwarsVehicles();
      this.setState({vehicles: starwarsVehicles});
  })();


  }  

  render(){
    const {vehicles, vehicleClass, currentPage, elementsPerPage} = this.state;
    const filteredVehicles = vehicles.filter(vehicle => 
      vehicle.vehicle_class.toLowerCase().includes(vehicleClass)
      )

    const paginate = (number) => this.setState({currentPage: number});

    return(
      <div className="main-container">
        <VehiclesSectionTitle />
        <div className="filters-container">
          <button 
            onClick={()=> this.setState({vehicleClass: ''})} 
            className={`${vehicleClass === '' ? 'highlight-filter' : null} filter-tag`}>
              all
          </button>
          <button 
            onClick={()=> this.setState({vehicleClass: 'starfighter'})} 
            className={`${vehicleClass === 'starfighter' ? 'highlight-filter' : null} filter-tag`} >
              starfighter
          </button>
          <button 
            onClick={()=> this.setState({vehicleClass: 'wheeled'})} 
            className={`${vehicleClass === 'wheeled' ? 'highlight-filter' : null} filter-tag`} >
              wheeled
          </button>
          <button 
            onClick={()=> this.setState({vehicleClass: 'speeder'})} 
            className={`${vehicleClass === 'speeder' ? 'highlight-filter' : null} filter-tag`} >
              speeder
          </button>
        </div>
        <CardGrid characters={filteredVehicles}
          currentPage={currentPage} 
          elementsPerPage={elementsPerPage} 
        />
        <Pagination 
          elementsPerPage={elementsPerPage} 
          TotalElements={vehicles.length}
          paginate={paginate}
        />
      </div>
    )
  }
}

export default VehiclesPage;