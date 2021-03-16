import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRoom } from '../actions/roomsActions';
import RoomsForm from '../components/RoomsForm'

class RoomsContainer extends Component {
    componentDidMount() {
        //this.props.addRoom()
    }

    render() {
        return (
            <div>
                RoomsContainer
                <RoomsForm />            
            </div>
        )
    }
}

export default connect(null, { addRoom })(RoomsContainer);