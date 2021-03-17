import { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
//import Home from './components/Home'
import PaintingsContainer from './containers/PaintingsContainer';
import RoomsContainer from './containers/RoomsContainer';
class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
        <Router />
        </header>
       <PaintingsContainer />
       <RoomsContainer />
      </div>
    );
  }

}

export default App;
