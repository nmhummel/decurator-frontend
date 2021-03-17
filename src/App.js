import './App.css';
import React from 'react'
import {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import PaintingsContainer from './containers/PaintingsContainer';
import RoomsContainer from './containers/RoomsContainer';
import Header from './components/Header.js'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">Home</Route>
          <Route exact path="/paintings"><PaintingsContainer /></Route>
          <Route exact path="/rooms"><RoomsContainer /></Route>
        </Switch>
      </Router>
    );
  }
}


