import React from "react";
import {connect} from "react-redux"
import SingleRoom from './SingleRoom'
import RoomsForms from './RoomsForm'

function DisplayRooms(props) {

    const rooms = props.rooms;
    const roomsList = rooms.map((room, index) => {
      return <SingleRoom key={index} room={room} />
     })

     return (
      <div className="all-room-comp">
        <RoomsForms />
       {roomsList}  
      </div>
    );
}


const mapStateToProps = (stateFromTheStore) => {
  console.log(stateFromTheStore)
    return {
        rooms: stateFromTheStore.rooms
    }
}
// this function needs to return what values we want as props

export default connect(mapStateToProps)(DisplayRooms)