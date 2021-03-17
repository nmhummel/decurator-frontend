import React from "react";
import {connect} from "react-redux"
import SinglePainting from './SinglePainting'


function DisplayPaintings(props) {

    const paintings = props.paintings;
    const paintingsList = paintings.map((painting, index) => {
      return <SinglePainting key={index} painting={painting} />
     })

     return (
      <div>
       {paintingsList}  
      </div>
    );
}


const mapStateToProps = (stateFromTheStore) => {
  console.log(stateFromTheStore)
    return {
        paintings: stateFromTheStore.paintings
    }
}
// this function needs to return what values we want as props

export default connect(mapStateToProps)(DisplayPaintings)