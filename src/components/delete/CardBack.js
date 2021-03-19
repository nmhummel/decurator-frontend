import { Component } from 'react';

class CardBack extends Component {

    render() {
        return(
          <div className='card-side side-back'>
            <div className='container-fluid'>
              <h1>Item #{this.props.painting.id} || "{this.props.painting.title}" ({this.props.painting.date})</h1>
              <div className="one-paint-info">
                    Artist: {this.props.painting.artist}<br />
                    Bio: {this.props.painting.artistBio}<br />
                    Medium: {this.props.painting.medium}<br />
                    <a href={this.props.painting.artUrl} target="_blank" rel="noreferrer">Visit Page at MoMa</a><br />
                </div>
            </div>
          </div>
        )
      }

}

export default CardBack;