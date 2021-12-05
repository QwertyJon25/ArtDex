import React from "react";
import { Link } from "react-router-dom";

function NavBar({ currentUser, handleLogout }) {


  

  return (
    <header>
      <div>
      <br></br>
        <Link to="/home"></Link>
        <h3>Welcome {currentUser.username}!</h3>
       
      </div>
      <div> 
  
          <Link to="/exercises">Exercises</Link>
          <br></br>
          <br></br>
          <Link to="/new">Add Exercise</Link>
          <br></br>
          <br></br>
          
          <button onClick={handleLogout}>Logout</button>
      
      </div>
    </header>
  );
}

export default NavBar;