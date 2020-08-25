import React, { Component } from 'react';
import './App.css';
import './assets/scss/imports/bootstrap.scss'
import MealTableApp from "./components/MealTableApp"

class App extends Component {
  render() {
    return (
        <div className="App">
          <MealTableApp></MealTableApp>
        </div>
    );
  }
}

export default App;
