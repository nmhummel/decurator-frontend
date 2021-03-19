import { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRoom } from '../actions/roomsActions'
import {fetchSingleRoom} from '../actions/roomsActions'
import {fetchPaintings} from '../actions/paintingsActions'


// import {
//     Link
//   } from "react-router-dom";

class RoomList extends Component {
 
    // allRooms = (props) => props.rooms.map((room, index) => {
    //     return console.log("allRooms", room, index)
        
    // })
   
    // componentDidMount() {
    //     console.log("this.props.room", this.props.rooms)
    // }
   
    // }
    render() {
        
        // {cases.map(indivCase => <ul key={indivCase.id}>
//         <ol>
//         <Link to={`/categories/${indivCase.category_id}/cases/${indivCase.id}`}>
//             <button>{indivCase.name}</button>
//         </Link>
//     </ol>
// </ul>)}


//    paintingsList = () => paintings.map((painting, index) => {
    //     return <SinglePainting key={index} painting={painting} rooms={props.rooms} />
        const currentRoom = this.props.currentRoom
        const currentPaintings = currentRoom.paintings
        
        //debugger
        return (
            
            <div className="one-room-comp">
           
            I am a single room page!<br/>

            {currentPaintings.map(paint => 
                <div className="one-painting">
                 <h3>{paint.title}</h3>
                <img src={paint.imageUrl} alt={paint.title +" image"} />
            </div>)
            }


            
            let me showz u mine<br />

            
            </div>
           
        )
        
    }
    
}



// {currentPaintings.map(paint => 
//     <SinglePainting key={paint.id} paint={paint} />
//     )
// }

// t.string "title"
// t.string "artist"
// t.string "artistBio"
// t.string "gender"
// t.string "date"
// t.string "medium"
// t.string "artUrl"
// t.string "imageUrl"

// {this.props.currentRoom.paintings[roomNumber].title}
const mapStateToProps = ({rooms, paintings}, ownProps) => {
    
    console.log("mSTP-SR", rooms) // this is showing all rooms (map or filter from it)
    console.log("mSTP-DP", paintings) // ???
    const currentRoom = rooms.find(room => room.id === parseInt(ownProps.match.params.id))
    console.log("currentRoom", currentRoom)
    return {currentRoom}
}

export default connect(mapStateToProps, {deleteRoom, fetchSingleRoom, fetchPaintings})(RoomList); // ???

//{/* {this.loadRoom(e)} */}
//{/* <button onClick={() => this.handleOnClick()}>Delete Room</button> */}
// {/*     const paintingsList = paintings.map((painting, index) => { return <SinglePainting key={index} painting={painting} rooms={props.rooms}/> */}

    // handleOnClick() {
    //     //debugger;
    //     this.props.deleteRoom(this.props.room.id)
    // }

    // loadRoom(e) {
    //     e.eventListener(onload)
    // }