import { Component } from 'react';
import { connect } from 'react-redux';

class SingleRoom extends Component {
 
    render() {
        const whereAreWe = this.props.currentRoom
        const currentPaintings = whereAreWe.paintings

        return (
            <div className="one-room-comp">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                Room: {whereAreWe.name}
                <br/>
                Click on each painting to visit its page at the MoMA's website.<br/><br/>
                {currentPaintings.map(paint => 
                    <div className="w3-third" key={paint.id}>
                    {paint.title} by {paint.artist}<br/>
                    <a href={paint.artUrl} target="_blank" rel="noreferrer">
                        <img src={paint.imageUrl} className="card-image" alt={paint.title +" image"}/>
                    </a>
                    <br /><br />
                </div>)
                }
            </div>
        ) 
    } 
}

const mapStateToProps = ({rooms}, ownProps) => {
    const currentRoom = rooms.find(room => room.id === parseInt(ownProps.match.params.id))
    return {currentRoom}
}

export default connect(mapStateToProps)(SingleRoom); 
