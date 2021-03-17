import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { addRoom } from '../actions/roomsActions';
//import RoomsForm from '../components/RoomsForm'
import DisplayRooms from '../components/DisplayRooms'
class RoomsContainer extends Component {
    // componentDidMount() {
    //     //this.props.addRoom()
    // }

    render() {
        return (
            <div>
                <DisplayRooms />     
            </div>
        )
    }
}

const mapStateToProps = ({rooms}) => {
    return {rooms}
}

const mapDispathToProps = dispatch => ({
    addRoom: room => dispatch({name: "ADD_ROOM", room}),
    deleteRoom: id =>dispatch({name: "DELETE_ROOM", id})  
})

export default connect(mapStateToProps, mapDispathToProps)(RoomsContainer);