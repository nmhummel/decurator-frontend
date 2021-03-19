import { Component } from 'react';
//import PaintingsContainer from '../containers/PaintingsContainer'
import PaintingFilter from './PaintingsFilter'

class SearchPaintings extends Component{

  state = {
    search: ""
  }

  handleInputChange = (e) => {
    const search = e.target.value
    this.setState({search: search}) // will cause a re-render
  }

  render(){
    return (
      <div className="App">
        <h5>Search for a Painting</h5>
        <PaintingFilter filterPaintings={this.filterPaintings} />
        {/* <PaintingsContainer searchTerm={this.state.search} /> */}
      </div>
    );
  }
}

export default SearchPaintings;