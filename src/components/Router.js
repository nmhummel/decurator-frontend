import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from './Home'
//import About from './About'
import PaintingsContainer from '../containers/PaintingsContainer';
import DisplayRooms from './DisplayRooms';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/paintings' component={PaintingsContainer} />
            <Route exact path='/rooms' component={DisplayRooms} />
        </Switch>
        
    );
};

export default Router;