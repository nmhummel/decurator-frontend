import React from 'react'
import {
    // Switch,
    // Route,
    Link
  } from "react-router-dom";

function Header(props) {
    return(
    <div className="header-overall">
      <div className="jumbotron text-center">
        <img src="decurator.png" alt="decurator-logo"/>
        <p></p> 
      </div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link to="#" className="navbar-brand">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar"> 
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/paintings" className="nav-link">Paintings</Link>
            </li>
            <li className="nav-item">
                <Link to="/rooms" className="nav-link">Current Rooms in Exhibit</Link>
            </li>
          </ul>
        </div>  
      </nav>    
      
      {/* <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path='/paintings'><Paintings /></Route>
          <Route path="/rooms"><Rooms /></Route>
      </Switch> */}
        
    </div>
    )
} 

    // function Home() {
    //     return (
    //       <div>
    //         <h2>Home Page</h2>
    //       </div>
    //     );
    //   }
      
    //   function Paintings()  {
    //     return (
    //       <div>
    //         <h2>Paintings</h2>
    //       </div>
    //     );
    //   }
      
    //  function Rooms() {
    //     return (
    //       <div>
    //         <h2>Rooms</h2>
    //       </div>
    //     );
    //   }
export default Header;