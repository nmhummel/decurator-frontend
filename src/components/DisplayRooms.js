import React from "react";
import {connect} from "react-redux"
import SingleRoom from './SingleRoom'


function DisplayRooms(props) {

    const rooms = props.rooms;
    const roomsList = rooms.map((room, index) => {
      return <SingleRoom key={index} room={room} />
     })

     return (
      <div className="all-paint-comp">
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