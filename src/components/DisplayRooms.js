import React from "react";
import {connect} from "react-redux"
import RoomList from './RoomList'
import RoomsForms from './RoomsForm'

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
  console.log(stateFromStore)
    return {
        rooms: stateFromStore.rooms,
        paintings: stateFromStore.paintings // ???
    }
}
// this function needs to return what values we want as props

export default connect(mapStateToProps)(DisplayRooms)