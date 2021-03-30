import React from "react";
import {connect} from "react-redux"
import RoomList from '../rooms/RoomList'
import RoomsForms from '../rooms/RoomsForm'

function DisplayRooms(props) {
    const rooms = props.rooms;
    const roomsList = rooms.map((room, index) => {
      return <RoomList key={index} room={room} />
     })

     return (
      <div className="all-comp">
        <RoomsForms />
        <br />
        {roomsList}  
      </div>
    );
}

const mapStateToProps = (stateFromStore) => {
    return {
        rooms: stateFromStore.rooms,
        paintings: stateFromStore.paintings 
    }
}

export default connect(mapStateToProps)(DisplayRooms)