import React from 'react';
import axios from 'axios';
import './character-cards-column.styles.css';

import HomeItemCard from '../home-item-card/home-item-card';

class CharacterCardsColumn extends React.Component{
  constructor(){
    super();

    this.state = {
      characters: [],
    }
  }

  componentDidMount(){
    axios.get(`https://swapi.py4e.com/api/people/`).then(res => {
        this.setState({characters: res.data.results})
      })
  }

  render(){
    return(
      <div className="container">
        <ul>
          {
            this.state.characters.map(character => 
              <li key={character.url} className="item-container">
                <HomeItemCard character={character}/>
              </li>)
          }
        </ul>
      </div>
    )
  }
}

export default CharacterCardsColumn;