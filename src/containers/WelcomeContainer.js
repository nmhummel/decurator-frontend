import { Component } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class WelcomeContainer extends Component {
    render() {
        return(
            <Jumbotron className="pb-1">
                <h1 className="header">Welcome to decUrator</h1>
                <h3 className="header">Curate and Decorate Galleries with Paintings of Your Choosing</h3>

                <p>
                All paintings are from the <a href="https://www.moma.org/" target="_blank" rel="noreferrer">Modern Museum of Art (MoMA)</a> located in New York City. 
                </p>
            </Jumbotron>
   
        )
    }
  
}


export default WelcomeContainer;