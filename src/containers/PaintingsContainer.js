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
                <div className="row">
                    <div className="col-sm-8">
                    <h2>Lots of Paintings</h2>
                    <h5>We haz them.</h5>
                    Paintings Container
                <DisplayPaintings />

                {/* <Switch>
                    <Route exact path="/paintings">
                        <SearchPaintings />
                    </Route>
           

                    <Route path="/paintings/:id"  component={(routeInfo) => {
                        const id = parseInt(routeInfo.match.params.id)
                        const item = this.props.paintings.find(i => i.id === id)
                        return !!item ? <SinglePainting routeInfo={routeInfo} item={item}/> : <div>Not Found!</div>
                    }}/>
                </Switch> */}
                   </div>
                </div>
            </div>
        );
    }

    
}

export default connect(null, { fetchPaintings })(PaintingsContainer);