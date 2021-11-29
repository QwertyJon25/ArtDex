import React from "react"
// import { Route, Switch } from "react-router-dom";
import ArtistPage from "./ArtistPage";
import DirectorPage from "./DirectorPage";
import GalleryPage from "./GalleryPage";
import PiecePage from "./PiecePage";
import NavBar from "./NavBar";



export default function Main() {

  
  return (
    <div className="app">
      {/* <NavBar />
      <Switch>
        <Route exact path="/about">
      <About />
      </Route>
      <Route exact path="/">
        <Header />
        </Route>
      <Route exact path="/dog-page">
      <DogPage />
      </Route>
      <Route exact path="/agency-page">
      <AgencyContainer />
      </Route>
      <Route exact path="*">
        <h1>404 Not Found</h1>
      </Route>
      </Switch> */}
      <NavBar/>
      <ArtistPage />
      <DirectorPage/>
      <GalleryPage/>
      <PiecePage/>
    </div>
  );
}

