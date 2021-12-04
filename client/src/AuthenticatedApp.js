import './App.css';
// import NavBar from './NavBar';
// import Main from "./Main"
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import WelcomePage from './WelcomePage';
import ArtistPage from "./ArtistPage";
import DirectorPage from "./DirectorPage";
import GalleryPage from "./GalleryPage";
import PiecePage from "./PiecePage";
import NavBar from "./NavBar";


function AuthenticatedApp({setCurrentUser, currentUser }){

  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
        }
      })
  }

  return ( 

     <div className="autehn-app">
    <WelcomePage/>
     <NavBar currentUser={currentUser} handleLogout={handleLogout}/>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Main />}>
           <Route path="artists" element={<ArtistPage />} />
           <Route path="directors" element={<DirectorPage/>} />
           <Route path="galleries" element={<GalleryPage/>} />
          <Route path="pieces" element={<PiecePage/>} />
          <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
       </Route>
     </Routes>
   </BrowserRouter>
    </div>
  )
}


export default AuthenticatedApp;