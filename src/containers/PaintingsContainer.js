import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPaintings } from '../actions/paintingsActions'
//import DisplayPaintings from '../components/DisplayPaintings'
import { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('../components/DisplayPaintings'))
class PaintingsContainer extends Component {
    componentDidMount() {
        this.props.fetchPaintings()
    }
     
    render() {
        return (
            <div>
                paintingsContainer
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyComponent />
                </Suspense>
            </div>
        );
    }

    
}

export default connect(null, { fetchPaintings })(PaintingsContainer);