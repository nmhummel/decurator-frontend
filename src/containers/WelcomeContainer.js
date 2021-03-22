import { Component } from 'react';
import React from 'react';


class WelcomeContainer extends Component {
    render() {
        return(
            <div className="welcome">
                <br /><br /><br />
                <video autoPlay muted loop id="myVideo">
                    <source src="moma.mp4" type="video/mp4" />
                </video>
          
                <div className="video-content">

                    <p>
                    All paintings are from the <a href="https://www.moma.org/" target="_blank" rel="noreferrer">Modern Museum of Art (MoMA)</a> located in New York City. 
                </p>
                 </div>

            </div>
   
        )
    }
  
}


export default WelcomeContainer;