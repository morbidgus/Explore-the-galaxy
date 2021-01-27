import React from 'react';
import './character-cards-column.styles.css';

import HomeItemCard from '../item-card/Item-card';

const CharacterCardsColumn = ({characters}) => {
    return(
      <div className="container">
        <ul>
          {
            characters.slice(0, 10).map((character, index) => 
              <li key={index}>
                <HomeItemCard character={character}/>
              </li>)
          }
        </ul>
      </div>
    )
}

export default CharacterCardsColumn;