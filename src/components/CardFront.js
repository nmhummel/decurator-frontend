import { Component } from 'react';

class CardFront extends Component {
    render() {
      return(
        <div className='card-side side-front'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="one-paint-photo">
                        <img src={this.props.painting.imageUrl} alt={this.props.painting.title} />
                    </div>
                </div>
            </div>
        </div>
        
      )
    }
  }

export default CardFront;

