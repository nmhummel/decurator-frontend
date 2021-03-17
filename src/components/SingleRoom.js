import { Component } from 'react';

class SingleRoom extends Component {
    render() {
        return (
            <div className="one-paint-comp">
                <div className="one-paint-title">
                    
                    Room {this.props.room.id} || "{this.props.room.name}" <br />
                </div>

            </div>
        )
    }
}

export default SingleRoom;
