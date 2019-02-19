import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';


import AppNavbar from './components/AppNavbar';
import FilmsList from './components/FilmsList';
import starshipsList from './components/starshipsList';
import StarshipsFavorite from './components/StarshipsFavorite';
class App extends Component {
  render() {
    return (
      <Provider store = { store }>
      <BrowserRouter basename = { process.env.PUBLIC_URL } >
      <div className="App">
        <AppNavbar/>
        <Route exact path = '/' component = { FilmsList } />
        <Route exact path = '/films/:id' component = { starshipsList } />
        <Route exact path = '/films/starships' component = { StarshipsFavorite } />

      </div>
    </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
