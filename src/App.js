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
import Header from './components/Header.js'
import {fetchRooms} from './actions/roomsActions'
//import RoomList from './components/RoomList';


class App extends Component {

  componentDidMount() {
    //debugger
    this.props.dispatchFetchRooms()
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">Home</Route>
          <Route exact path="/paintings"><PaintingsContainer /></Route>
          {/* <Route path="/rooms/:id"><RoomList /></Route> */}
          <Route exact path="/rooms"><RoomsContainer /></Route>
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatchFetchRooms: () => dispatch(fetchRooms())}
}

export default connect(null, mapDispatchToProps)(App)
