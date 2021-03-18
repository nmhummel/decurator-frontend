import { Component } from 'react';
import { connect } from 'react-redux';
// import CardFront from './CardFront';
// import CardBack from './CardBack';
// import CardFlip from './CardFlip'
// import ReactCardFlip from "react-card-flip";


class SinglePainting extends Component {

    state = {
        roomId: 1
    }

    handleOnClick() {
        console.log(this.state.roomId)
        this.props.addPaintingToRoom(this.state.roomId, this.props.painting)
    }

    handleChange = event => {
        console.log(event.target.value)
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    

    // handleFlip = () => {
    //         setIsFlipped(!isFlipped);
    // }
    
    render() {
        return (

        <div className="one-paint-comp">

        {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"> */}
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="one-paint-photo">
                            <h4><img src={this.props.painting.imageUrl} alt={this.props.painting.title} /></h4>
                        </div>
                        {/* <button className="front-flip-button" onClick={handleFlip}>Click to flip</button> */}
                    </div>
                </div>
            </div>

            <div className='card-side side-back'>
                <div className='container-fluid'>
                    <h1>Item #{this.props.painting.id} || "{this.props.painting.title}" ({this.props.painting.date})</h1>
                    <div className="one-paint-info">
                            Artist: {this.props.painting.artist}<br />
                            Bio: {this.props.painting.artistBio}<br />
                            Medium: {this.props.painting.medium}<br />
                            <a href={this.props.painting.artUrl} target="_blank" rel="noreferrer">Visit Page at MoMa</a><br />
                    </div>
                    {/* <button className="back-flip-button" onClick={handleFlip}>Click to flip</button> */}
                </div>  
            </div>  
        {/* </ReactCardFlip> */}
            <select id="room-drop" name="roomId" onChange={this.handleChange}> 
                 {/* need onchange to update state */}
                {this.props.rooms.map((room,index) => {return <option key={index} value={room.id}>{room.name}</option>}
                )}
            </select>
            <button onClick={() => this.handleOnClick()} className='btn btn-primary' value='Add to Room'>Add to Room</button>
            <br /><br />
        </div>
        
        )
    }
}
// gotta hit back end (room and room's painting)
// resp => room and room's painting


function mapDispatchToProps(dispatch) {
    return {
        addPaintingToRoom: (roomId, painting) => dispatch({type: 'ADD_PAINTING_TO_ROOM', roomId: roomId, painting: painting}) // needs 2args of room chosen and painting
    }
}

const mapStateToProps = ({paintings}) => {
    return {paintings}
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePainting); 
