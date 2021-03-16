import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPaintings } from '../actions/paintingsActions'
import DisplayPaintings from '../components/DisplayPaintings'

class PaintingsContainer extends Component {
    componentDidMount() {
        this.props.fetchPaintings()
    }
     
    render() {
        return (
            <div>
                paintingsContainer
                <DisplayPaintings />
            </div>
        )
    }

    
}

export default connect(null, { fetchPaintings }) (PaintingsContainer);