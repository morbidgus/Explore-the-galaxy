import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './item-page.styles.css';
import AnimatedCharacter from '../../components/animated-character/animated-character';
import { useHistory } from "react-router-dom";
import BackBtn from '../../assets/back.svg';

const getCharacterId = (search) => {
  search = search.slice(4);
  return search.slice(0, -1);
}

const ItemPage = () => {
  let history = useHistory();
  const [itemDetails, setItemDetails] = useState();

  useEffect(()=>{
    axios.get(`https://swapi.py4e.com/api/people/${characterId}/`)
      .then(res => {
        const details = res.data;
        setItemDetails(details);
      })
  }, [])

  const { search } = useLocation();
  let characterId = getCharacterId(search);
  return(
    <div className="page-wrapper">
      <img src={BackBtn} alt="Back" onClick={() => history.goBack()} className="back-btn"/>
      {
        itemDetails ? 
          <div className="details-container">
            <span className="name">{itemDetails.name}</span>
            <div className="info-wrapper">
              <span className="info">Gender: </span>
              <span className="info">{itemDetails.gender}</span>
            </div>
            <div className="info-wrapper">
              <span className="info">Birth Year: </span>
              <span className="info">{itemDetails.birth_year}</span>
            </div>           
            <div className="info-wrapper">
              <span className="info" >Height: </span>
              <span className="info">{itemDetails.height}</span>
            </div>
            <div className="info-wrapper">
              <span className="info" >Hair Color: </span>
              <span className="info">{itemDetails.hair_color}</span>
            </div>
            <div className="info-wrapper">
              <span className="info" >Skin Color: </span>
              <span className="info">{itemDetails.skin_color}</span>
            </div>            
            <div className="info-wrapper">
              <span className="info" >Eye Color: </span>
              <span className="info">{itemDetails.eye_color}</span>
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

export default ItemPage;