import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { addRoom } from '../actions/roomsActions';
//import RoomsForm from '../components/RoomsForm'
import DisplayRooms from '../components/DisplayRooms'
import { fetchRooms } from '../actions/roomsActions'
class RoomsContainer extends Component {
    componentDidMount() {
       this.props.fetchRooms()
    }

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
    fetchRooms: () => dispatch(fetchRooms()),
    addRoom: room => dispatch({type: "ADD_ROOM", room}),
    deleteRoom: id =>dispatch({type: "DELETE_ROOM", id})  
})

export default connect(mapStateToProps, mapDispathToProps)(RoomsContainer);