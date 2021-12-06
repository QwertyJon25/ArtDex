import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import WelcomeHeader from "./WelcomeHeader"
import WelcomePage from './WelcomePage';
import ArtistPage from "./ArtistPage";
import DirectorPage from "./DirectorPage";
import GalleryPage from "./GalleryPage";
import PiecePage from "./PiecePage";
import NavBar from "./NavBar";
import ArtistProfile from "./ArtistProfile";


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

  console.log(currentUser)

  return ( 

     <div className="authen-app">
    <WelcomePage/>
     <NavBar currentUser={currentUser} handleLogout={handleLogout}/>
    <BrowserRouter>
     <Routes>
       <Route path="/main" element={<Main />}>
          <Route path="/welcome" element={<WelcomeHeader />} />
           <Route path="artists" element={<ArtistPage />} />
           <Route path="directors" element={<DirectorPage/>} />
           <Route path="galleries" element={<GalleryPage/>} />
          <Route path="pieces" element={<PiecePage/>} />
          <Route path="your-pieces" element={<ArtistProfile/>} />
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

      // <div className="authen-app">
      //   <NavBar currentUser={currentUser} handleLogout={handleLogout}/>
      //   <Main/>
      //   <WelcomeHeader/>
      //   <ArtistPage/>
      //   <DirectorPage/>
      //   <GalleryPage/>
      //   <PiecePage/>
      //   <ArtistProfile/>

      // </div>

  )
}


export default AuthenticatedApp;