import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import { Outlet, Link } from "react-router-dom";
// import AutenticatedApp from "./AuthenticatedApp"
// import UnauthenticatedApp from "./UnauthenticatedApp"
import Main from "./Main";
// import WelcomePage from './WelcomePage';
import ArtistPage from "./ArtistPage";
import DirectorPage from "./DirectorPage";
import GalleryPage from "./GalleryPage";
import PiecePage from "./PiecePage";
// import NavBar from "./NavBar";
// import ArtistProfile from "./ArtistProfile";



export default function App() {
  // const [currentUser, setCurrentUser] = useState(null)
  // const [authChecked, setAuthChecked] = useState(false)

  // useEffect(() => {
  //   fetch('/me', {
  //     credentials: 'include'
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         res.json().then((user) => {
  //           setCurrentUser(user)
  //           setAuthChecked(true)
  //         })
  //       } else {
  //         setAuthChecked(true)
  //       }
  //     })
  // }, [])
  
  // if(!authChecked) { return <div></div>}


  return (
    // <AuthenticatedApp />,
    // <UnauthenticatedApp/>,
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/main" element={<Main />} />
  //     <Route path="welcome" element={<WelcomePage />} />
  //   </Routes>
  // </BrowserRouter>

  <div>
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
           {/* <Route path="invoices" element={<ArtistProfile />} /> */}
       </Route>
     </Routes>
   </BrowserRouter>,
      {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/main">Main</Link> |{" "}
        <Link to="/welcome">Welcome</Link>
      </nav>
      <Outlet /> */}
    </div>
    
  //   <Router>
    
  //     {currentUser ? (
  //         <AuthenticatedApp
  //           setCurrentUser={setCurrentUser}
  //           currentUser={currentUser}
  //         />
  //       ) : (
  //         <WelcomePage />,
  //         <UnauthenticatedApp
  //           setCurrentUser={setCurrentUser}
  //         />
  //       )
  //     }
  //  </Router>
)
}



