import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRoom } from '../actions/roomsActions';
//import RoomsForm from '../components/RoomsForm'
import DisplayRooms from '../components/DisplayRooms'
class RoomsContainer extends Component {
    componentDidMount() {
        //this.props.addRoom()
    }

    render() {
        return (
            <div>
                RoomsContainer
                <DisplayRooms />     

            </div>
        )
    }
}

export default connect(null, { addRoom })(RoomsContainer);