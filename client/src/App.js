import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/AppNavbar';
import FilmsList from './components/FilmsList';
class App extends Component {
  render() {
    return (
      <Provider store = { store }>
      <div className="App">
        <AppNavbar/>
        <FilmsList />
      </div>
      </Provider>
    );
  }
}

export default App;
