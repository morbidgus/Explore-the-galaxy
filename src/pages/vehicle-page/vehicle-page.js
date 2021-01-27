import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './vehicle-page.styles.css';
import AnimatedCharacter from '../../components/animated-character/animated-character';

const getVehicleId = (search) => {
  search = search.slice(4);
  return search.slice(0, -1);
}

const VehiclePage = () => {
  const [itemDetails, setItemDetails] = useState();

  useEffect(()=>{
    axios.get(`https://swapi.py4e.com/api/vehicles/${vehicleId}/`)
      .then(res => {
        const details = res.data;
        setItemDetails(details);
        console.log(itemDetails);
      })
  }, [])

  const { search } = useLocation();
  let vehicleId = getVehicleId(search);
  return(
    <div className="page-wrapper">
      {
        itemDetails ? 
          <div className="details-container">
            <span className="name">{itemDetails.name}</span>
            <div className="info-wrapper">
              <span className="info">Model: </span>
              <span className="info">{itemDetails.model}</span>
            </div>      
            <div className="info-wrapper">
              <span className="info">Manufacturer: </span>
              <span className="info">{itemDetails.manufacturer}</span>
            </div>      
            <div className="info-wrapper">
              <span className="info">Length: </span>
              <span className="info">{itemDetails.length}</span>
            </div>      
            <div className="info-wrapper">
              <span className="info">Cargo Capacity: </span>
              <span className="info">{itemDetails.cargo_capacity}</span>
            </div>      
            <div className="info-wrapper">
              <span className="info">Vehicle Class: </span>
              <span className="info">{itemDetails.vehicle_class}</span>
            </div>      
          </div>
          : 
          <div>
            <AnimatedCharacter />
          </div>
    
      }
      
    </div>
  )
}

export default VehiclePage;