import React from 'react';
import axios from 'axios';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';

import Home from './pages/homepage/Home';
import CharactersPage from './pages/characters/Characters-page';
import VehiclesPage from './pages/vehicles/Vehicles-page';
import ItemPage from './pages/item-page/item-page';
import VehiclePage from './pages/vehicle-page/vehicle-page';


class App extends React.Component{

  constructor(){
    super();

    this.state = {      
      characters: [],
      vehicles: []
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
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={ ()=> <Home characters={this.state.characters}  vehicles={this.state.vehicles}/>} />
          <Route path='/characters' render={ ()=> <CharactersPage characters={this.state.characters} />} />
          <Route path='/vehicles' render={ ()=> <VehiclesPage vehicles={this.state.vehicles} />}  />
          <Route path='/character' component={ItemPage} />
          <Route path='/vehicle' component={VehiclePage} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
