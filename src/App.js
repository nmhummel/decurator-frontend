import './App.css';
import React from 'react'
import {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PaintingsContainer from './containers/PaintingsContainer';
import RoomsContainer from './containers/RoomsContainer';

export default class App extends Component {
  render() {
    return (
        <Router>
        <div>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/paintings">Paintings</Link>
            </li>
            <li>
                <Link to="/rooms">Rooms</Link>
            </li>
            </ul>

            <hr />

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path='/paintings'><Paintings /></Route>
                <Route path="/rooms"><Rooms /></Route>
            </Switch>
        </div>
        </Router>
    );
  }
}

function Home() {
    return (
      <div>
        <h2>Home Page</h2>
      </div>
    );
  }
  
  function Paintings()  {
    return (
      <div>
        <h2>Paintings</h2>
        <PaintingsContainer />
      </div>
    );
  }
  
 function Rooms() {
    return (
      <div>
        <h2>Rooms</h2>
        <RoomsContainer />
      </div>
    );
  }
