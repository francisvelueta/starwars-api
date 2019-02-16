import React, { Component } from 'react';
import './App.css';


import AppNavbar from './components/AppNavbar';
import FilmsList from './components/FilmsList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <FilmsList />

      </div>
    );
  }
}

export default App;
