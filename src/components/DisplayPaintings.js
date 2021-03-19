import React from "react";
import {connect} from "react-redux"
import SinglePainting from './SinglePainting'
import {fetchPaintings} from '../actions/paintingsActions'

function DisplayPaintings(props) {

    const paintings = props.paintings;
    const paintingsList = paintings.map((painting, index) => {
      return <SinglePainting key={index} painting={painting} rooms={props.rooms}/>
    })

    const refreshPaintings =() => {
      props.fetchPaintings()
    }

    return (
      <div>
        {paintingsList}  
        <br />
        <button onClick={refreshPaintings}>Click to see different paintings</button>
      </div>
    );
}

const mapStateToProps = (stateFromTheStore) => {
  console.log(stateFromTheStore)
    return {
        paintings: stateFromTheStore.paintings,
        rooms: stateFromTheStore.rooms
    }
} // this function needs to return what values we want as props

export default connect(mapStateToProps, {fetchPaintings})(DisplayPaintings)