import React from "react";
import {connect} from "react-redux"
import SinglePainting from './SinglePainting'


function DisplayPaintings(props) {

    const paintings = props.paintings;
    const paintingsList = paintings.map((painting, index) => {
      return <SinglePainting key={index} painting={painting} rooms={props.rooms}/>
    })


    return (
      <><br />
      <div className="change-paintings">
        <button onClick={props.refreshPaintings}>Click to see different paintings.</button> 
      <br /><br />
      <br />
          {paintingsList} 
      </div>
        <br />
      </>
    );
}

const mapStateToProps = (stateFromTheStore) => {
    return {
        paintings: stateFromTheStore.paintings,
        rooms: stateFromTheStore.rooms
    }
} // this function needs to return what values we want as props

export default connect(mapStateToProps)(DisplayPaintings)