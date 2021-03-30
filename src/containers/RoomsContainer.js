import React, { Component } from 'react';
import { connect } from 'react-redux'
import DisplayRooms from '../components/rooms/DisplayRooms'
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

const mapDispatchToProps = dispatch => ({
    fetchRooms: () => dispatch(fetchRooms()),
    addRoom: room => dispatch({type: "ADD_ROOM", room}),
    deleteRoom: id =>dispatch({type: "DELETE_ROOM", id})  
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);