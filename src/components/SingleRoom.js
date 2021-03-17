import { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRoom } from '../actions/roomsActions'
class SingleRoom extends Component {

    handleOnClick() {
        //debugger;
        this.props.deleteRoom(this.props.room.id)
    }

    render() {
        return (
            <div className="one-paint-comp">
                <div className="one-paint-title">
                    Room {this.props.room.id} || "{this.props.room.name}" <br />
                    <button onClick={() => this.handleOnClick()}>Delete Room</button>
                    <br />
                </div>
            <br />
            </div>
        )
    }
}



export default connect(null, {deleteRoom})(SingleRoom); 

