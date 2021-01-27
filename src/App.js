import React from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';

import Home from './pages/homepage/Home';
import CharactersPage from './pages/characters/Characters-page';
import VehiclesPage from './pages/vehicles/Vehicles-page';
import ItemPage from './pages/item-page/item-page';


class App extends React.Component{

  constructor(){
    super();

    this.state = {      
      characters: []
    }
  }

  componentDidMount(){
    function getAllStarwarsCharacters() {
      let characters = [];

      return axios("https://swapi.py4e.com/api/people/")
        .then(response => {
          characters = response.data.results;
          return response.data.count;
        })
        .then(count => {
          const numberOfPagesLeft = Math.ceil((count - 1) / 10);
          let promises = [];

          for (let i = 2; i <= numberOfPagesLeft; i++) {
            promises.push(axios(`https://swapi.py4e.com/api/people?page=${i}`));
          }
          return Promise.all(promises);
        })
        .then(response => {
          characters = response.reduce((acc, data) => [...acc, ...data.data.results], characters);
          return characters;
        })
        .catch(error => console.log("Something wrong. Please refresh the page and try again."));
    }
  
  (async () => {
      const starwarsCharacters = await getAllStarwarsCharacters();
      this.setState({characters: starwarsCharacters});
  })();


  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/characters' render={ ()=> <CharactersPage characters={this.state.characters} />} />
          <Route path='/vehicles' component={VehiclesPage} />
          <Route path='/character' component={ItemPage} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
