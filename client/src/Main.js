import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
// import App from "./App";
// import ArtistPage from "./ArtistPage";
// import DirectorPage from "./DirectorPage";
// import GalleryPage from "./GalleryPage";
// import PiecePage from "./PiecePage";
// import NavBar from "./NavBar";
// import ArtistProfile from "./ArtistProfile";




export default function Main() {

  
  return (
    <div className="main">
    {/* <BrowserRouter>
    <Routes>
        <Route path="artists" element={<ArtistPage />} />
        <Route path="directors" element={<DirectorPage/>} />
        <Route path="galleries" element={<GalleryPage/>} />
        <Route path="invoices" element={<PiecePage/>} />
        <Route path="invoices" element={<ArtistProfile />} />
    </Routes>
  </BrowserRouter> */}
  <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/artists">Artists</Link> |{" "}
        <Link to="/directors">Directors</Link> |{" "}
        <Link to="/galleries">Galleries</Link> |{" "}
        <Link to="/pieces">Pieces</Link>
        {/* <Link to="/profile">Profile</Link> */}
      </nav>
      <Outlet />
  </div>
  );
}


