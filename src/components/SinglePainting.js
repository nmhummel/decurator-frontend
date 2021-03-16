import { Component } from 'react';

class SinglePainting extends Component {
    render() {
        return (
            <div className="one-paint-comp">
                <div className="one-paint-title">
                    Item #{this.props.painting.id} || "{this.props.painting.title}" ({this.props.painting.date})
                </div>
                <div className="one-paint-info">
                    Artist: {this.props.painting.artist}<br />
                    Bio: {this.props.painting.artistBio}<br />
                    Medium: {this.props.painting.medium}<br />
                    <a href={this.props.painting.artUrl} target="_blank" rel="noreferrer">Visit Page at MoMa</a><br />
                    <img src={this.props.painting.imageUrl} alt={this.props.painting.title} /><br />
                    <br />
                </div>
            </div>
        )
    }
}

export default SinglePainting;
// artUrl: "http://www.moma.org/collection/works/78944"
// artist: "A. E. Gallatin"
// artistBio: "American, 1881â1952"
// date: "December 1949"
// gender: "Male"
// id: 805
// imageUrl: "http://www.moma.org/media/W1siZiIsIjE3MTkyOSJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDMwMHgzMDBcdTAwM2UiXV0.jpg?sha=a85a96ccd512cd40"
// medium: "Oil on canvas"
// title: "Forms and Red"