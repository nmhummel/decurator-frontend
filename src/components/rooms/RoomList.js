import { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRoom } from '../../actions/roomsActions'
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
            <div className="all-comp-room">
                <Link to={"/rooms/"+ this.props.room.id} className="room-link">Room {this.props.room.id} &bull; "{this.props.room.name}" </Link>
                <button id="buttons" onClick={() => this.handleOnClick()}>Delete Room</button>
            </div>
        )
    }
}

// key={this.props.room.id}

export default connect(null, {deleteRoom})(RoomList); 

