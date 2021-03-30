import { Component } from 'react';
import { connect } from 'react-redux';
import ReactCardFlip from "react-card-flip";
import { addPaintingToRoom } from '../../actions/roomsActions';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class SinglePainting extends Component {
    constructor() {
        super();
        this.state = {
            roomId: 1,
            isFlipped: false
        };
        this.handleFlip = this.handleFlip.bind(this);
    }

    handleOnClick() {
        this.props.addPaintingToRoom(this.state.roomId, this.props.painting)
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    
    handleFlip(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    
    stopFlip = (e) =>{
        e.stopPropagation()
    }

    render() {
        return (
            <div className="w3-third" id="myGrid">
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className="grid-container" onClick={this.handleFlip}>
                        <div className='grid-item'>
                                <img src={this.props.painting.imageUrl} alt={this.props.painting.title} className="card-image"/>
                        </div>
                    </div>
            
                    <div className="grid-container" onClick={this.handleFlip}>
                        <div className="grid-item">
                                <h4>Item #{this.props.painting.id} || "{this.props.painting.title}" ({this.props.painting.date})</h4>
                                Artist: {this.props.painting.artist}<br />
                                Bio: {this.props.painting.artistBio}<br />
                                Medium: {this.props.painting.medium}<br />
                                <a href={this.props.painting.artUrl} target="_blank" rel="noreferrer" onClick={this.stopFlip}>Visit Page at MoMa</a>
                        </div>
                    </div>
                </ReactCardFlip>

                <select id="room-drop" name="roomId" onChange={this.handleChange}> 
                    {this.props.rooms.map((room,index) => {return <option key={index} value={room.id}>{room.name}</option>})}
                </select>
                
                <Popup trigger={<button onClick={() => this.handleOnClick()} id="buttons" value='Add to Room'>Add to Room</button>} position="right center">
                    <div>Painting Added</div>
                </Popup>

                    <br /><br /><br/><br/>
            </div>
        
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPaintingToRoom: (roomId, painting) => dispatch(addPaintingToRoom(roomId, painting)) 

    }
}

const mapStateToProps = ({paintings}) => {
    return {paintings}
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePainting); 
