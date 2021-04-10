import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPaintings } from '../actions/paintingsActions'
import DisplayPaintings from '../components/paintings/DisplayPaintings'
class PaintingsContainer extends Component {
    componentDidMount() {
        console.log("a")
        this.props.fetchPaintings()
        console.log("b")
    }
     
    refreshPaintings = () => {
      this.props.fetchPaintings()
    }

    render() {
        return (
            <div className="container">
                <br /><br /><br />
                <div id="intro">Take a look at these beautiful paintings and add them
                        to the rooms you created.</div>
                <DisplayPaintings refreshPaintings = {this.refreshPaintings}/>
                <br />
            </div>
        );
    }
}

export default connect(null, { fetchPaintings })(PaintingsContainer);