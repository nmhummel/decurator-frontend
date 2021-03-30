import './App.css';
import React from 'react'
import {Component} from 'react';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import PaintingsContainer from './containers/PaintingsContainer';
import RoomsContainer from './containers/RoomsContainer';
import Header from './components/header/Header';
import {fetchRooms} from './actions/roomsActions';
import WelcomeContainer from './containers/WelcomeContainer';
import SingleRoom from './components/rooms/SingleRoom';
import Navbar from './components/header/Navbar';
import About from './components/header/About';

class App extends Component {

  componentDidMount() {
    //debugger
    this.props.dispatchFetchRooms()
  }

  render() {
    return (
      <Router>
        <div className="sticky">
        <Header />
        <Navbar />
        </div>
        <Switch className="content">
          <Route exact path="/"><WelcomeContainer /></Route>
          <Route exact path="/paintings"><PaintingsContainer /></Route>
          <Route exact path="/about"><About /></Route>
          { this.props.rooms.length > 0 && <Route path="/rooms/:id" component={SingleRoom} /> }
          <Route exact path="/rooms"><RoomsContainer /></Route> 
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatchFetchRooms: () => dispatch(fetchRooms())}
}

const mapStateToProps = ({rooms}) => {
  return {rooms}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
