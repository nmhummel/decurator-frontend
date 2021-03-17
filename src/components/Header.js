import React from 'react'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header(props) {
    return(
        <div id="header">
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/paintings">Paintings</Link>
            </li>
            <li>
                <Link to="/rooms">Current Rooms in Exhibit</Link>
            </li>
            </ul>

            <hr />

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path='/paintings'><Paintings /></Route>
                <Route path="/rooms"><Rooms /></Route>
            </Switch>
        </div>
    )
} 

    function Home() {
        return (
          <div>
            <h2>Home Page</h2>
          </div>
        );
      }
      
      function Paintings()  {
        return (
          <div>
            <h2>Paintings</h2>
          </div>
        );
      }
      
     function Rooms() {
        return (
          <div>
            <h2>Rooms</h2>
          </div>
        );
      }
export default Header;