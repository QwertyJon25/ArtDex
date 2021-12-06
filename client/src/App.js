import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
// import AuthenticatedApp from "./AuthenticatedApp"
// import UnauthenticatedApp from "./UnauthenticatedApp"
import Main from "./Main";
import WelcomeHeader from "./WelcomeHeader"
import WelcomePage from './WelcomePage';
import ArtistPage from "./ArtistPage";
import DirectorPage from "./DirectorPage";
import GalleryPage from "./GalleryPage";
import PiecePage from "./PiecePage";
import ArtistProfile from "./ArtistProfile";



export default function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [])
  
  if(!authChecked) { return <div></div>}


  return (

  //   <div className="app">
  //   <BrowserRouter>
  //   <Routes>
  // {currentUser ? (
  //      <Route path="/" element={<AuthenticatedApp  setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
  //  ) : (

  //         <Route path="/unauthen" element={<UnauthenticatedApp setCurrentUser={setCurrentUser}/>} /> ) }
  //   </Routes>
  // </BrowserRouter>
  // </div>

//   <div className="app">
//  {currentUser ? (<AuthenticatedApp  setCurrentUser={setCurrentUser} currentUser={currentUser}/>) : (<UnauthenticatedApp setCurrentUser={setCurrentUser}/>)}
//   </div>


  <div className="app">
    <WelcomePage/>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Main />}>
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

)
}



