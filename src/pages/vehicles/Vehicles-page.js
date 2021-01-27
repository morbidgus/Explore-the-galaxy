import React from 'react';
import './Vehicles-page.styles.css';
import VehiclesSectionTitle from '../../components/vehicles-section-title/vehicles-section-title';
import VehiclesGrid from '../../components/vehicles-grid/vehicles-grid';
import Pagination from '../../components/pagination/pagination';

class VehiclesPage extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      currentPage: 1,
      elementsPerPage: 20,
      vehicleClass: ''
    }
  }


  render(){
    const {vehicles} = this.props;
    const {vehicleClass, currentPage, elementsPerPage} = this.state;
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
        <VehiclesGrid vehicles={filteredVehicles}
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