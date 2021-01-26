import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';

import Home from './pages/homepage/Home';
import CharactersPage from './pages/characters/Characters-page';
import VehiclesPage from './pages/vehicles/Vehicles-page';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/characters' component={CharactersPage} />
        <Route path='/vehicles' component={VehiclesPage} />
      </Switch>
    </div>
  );
}

export default App;
