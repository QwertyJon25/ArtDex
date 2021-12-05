import React from "react";
import { Link } from "react-router-dom";

function NavBar({ currentUser, handleLogout }) {


  

  return (
    <header>
      <div>
        <nav>
        <Link to="/"></Link>
        </nav>
        <h3>Welcome {currentUser.username}!</h3>
      </div>
      <div>
          <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}

export default NavBar;