import { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSingleRoom} from '../actions/roomsActions'
import {fetchPaintings} from '../actions/paintingsActions'
class SingleRoom extends Component {
 
    render() {
        
        const currentRoom = this.props.currentRoom
        const currentPaintings = currentRoom.paintings
    
        return (
            <div className="one-room-comp">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                Room: {currentRoom.name}
                <br/>
                Click on each painting to visit its page at the MoMA's website.<br/><br/>
                {currentPaintings.map(paint => 
                    <div className="w3-third">
                    {paint.title} by {paint.artist}<br/>
                    <a href={paint.artUrl} target="_blank" rel="noreferrer"><img src={paint.imageUrl} class="card-image" alt={paint.title +" image"}/></a>
                    <br /><br />
                </div>)
                }
            </div>
        ) 
    } 
}


const mapStateToProps = ({rooms}, ownProps) => {
    const currentRoom = rooms.find(room => room.id === parseInt(ownProps.match.params.id))
    console.log("currentRoom", currentRoom)
    return {currentRoom}
}

export default connect(mapStateToProps, {fetchSingleRoom, fetchPaintings})(SingleRoom); 
