import { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRoom } from '../actions/roomsActions'
import {fetchSingleRoom} from '../actions/roomsActions'
// import {
//     Link
//   } from "react-router-dom";

class RoomList extends Component {

    // handleOnClick() {
    //     //debugger;
    //     this.props.deleteRoom(this.props.room.id)
    // }

    // loadRoom(e) {
    //     e.eventListener(onload)
    // }

    render() {
        //debugger
        let roomNumber = this.props.match.params.id
        return (
            
            <div className="one-room-comp">
            {/* {this.loadRoom(e)} */}
            I am a single room page!<br/>
            Room {roomNumber} || "Room Name"<br/>
            {/* <button onClick={() => this.handleOnClick()}>Delete Room</button> */}
            let me showz u my paynteengs                 

            <br />
            </div>
        )
    }
}

const mapStateToProps = ({rooms}) => {
    console.log("mSTP-SR", rooms) // this is showing all rooms (map or filter from it)
    return {rooms}
}

export default connect(mapStateToProps, {deleteRoom, fetchSingleRoom})(RoomList); 

