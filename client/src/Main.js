import React from 'react'
import { Outlet, Link } from "react-router-dom";




export default function Main() {

  
  return (
    <div className="main">
  <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/artists">Artists</Link> |{" "}
        <Link to="/directors">Directors</Link> |{" "}
        <Link to="/galleries">Galleries</Link> |{" "}
        <Link to="/pieces">Pieces</Link> |{" "}
        <Link to="/profile">Your Profile</Link>
      </nav>
      <Outlet />
  </div>
  );
}


