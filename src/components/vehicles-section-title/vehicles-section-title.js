import './vehicles-section-title.styles.css';
import vehicles from '../../assets/vehicles.png';

const VehiclesSectionTitle = () => {
  return(
    <div className="vehicle-title-container">
      <img src={vehicles} alt="vehicles" className="title-image"/>
      <span className="category-title">VEHICLES</span>
    </div>
  )

}

export default VehiclesSectionTitle;