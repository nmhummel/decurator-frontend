import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPaintings } from '../actions/paintingsActions'
import DisplayPaintings from '../components/DisplayPaintings'
//import { Suspense } from 'react';
// import SearchPaintings from '../components/SearchPaintings';
// import {
//     Switch,
//     Route
//   } from "react-router-dom";
// import SinglePainting from '../components/SinglePainting';

//const LazyComponent = React.lazy(() => import('../components/DisplayPaintings'))
class PaintingsContainer extends Component {
    componentDidMount() {
        this.props.fetchPaintings()
    }
     

    render() {
        return (
            <div className="container">
                <div className="column">
                    <h2>Lots of Paintings</h2>
                    <h5>We haz them.</h5>
                    Paintings Container
                <DisplayPaintings />
                <br />
                </div>
            </div>
        );
    }
}

export default connect(null, { fetchPaintings })(PaintingsContainer);