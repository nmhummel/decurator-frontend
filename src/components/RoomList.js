import { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRoom } from '../actions/roomsActions'
import {
    Link
  } from "react-router-dom";

class RoomList extends Component {

    handleOnClick() {
        //debugger;
        this.props.deleteRoom(this.props.room.id)
    }

    render() {
        return (
            <div className="one-paint-comp">
                <div className="one-paint-title">
                    <Link to={"/rooms/"+ this.props.room.id} className="room-link">Room {this.props.room.id} || "{this.props.room.name}" </Link><br />
                    <button onClick={() => this.handleOnClick()}>Delete Room</button>
                    <br />
                </div>
            <br />
            </div>
        )
    }
}



export default connect(null, {deleteRoom})(RoomList); 

