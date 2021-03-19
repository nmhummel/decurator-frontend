
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const CardFlip = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  //debugger
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className='card-side side-front'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="one-paint-photo">
                        <img src={props.painting.imageUrl} alt={props.painting.title} />
                    </div>
                    <button className="front-flip-button" onClick={handleFlip}>Click to flip</button>
                </div>
            </div>
        </div>
    

        <div className='card-side side-back'>
            <div className='container-fluid'>
                <h1>Item #{props.painting.id} || "{props.painting.title}" ({props.painting.date})</h1>
                <div className="one-paint-info">
                        Artist: {this.props.painting.artist}<br />
                        Bio: {this.props.painting.artistBio}<br />
                        Medium: {this.props.painting.medium}<br />
                        <a href={this.props.painting.artUrl} target="_blank" rel="noreferrer">Visit Page at MoMa</a><br />
                </div>
                <button className="back-flip-button" onClick={handleFlip}>Click to flip</button>
            </div>  
        </div>  
    </ReactCardFlip>
  );
};

export default CardFlip