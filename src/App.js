import { Component } from 'react';
import './App.css';
import RoomsContainer from './containers/RoomsContainer'
import PaintingsContainer from './containers/PaintingsContainer'
//import ExhibitsContainer from './containers/ExhibitsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RoomsContainer />
          
        </header>
        <PaintingsContainer />
      </div>
    );
  }
}

export default App;
