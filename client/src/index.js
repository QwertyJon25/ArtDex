// import { render } from "react-dom";
import React from 'react'
import ReactDOM from 'react-dom';
import App from "./App";
// import Main from "./Main";
import './index.css';
// import ArtistPage from "./ArtistPage";
// import DirectorPage from "./DirectorPage";
// import GalleryPage from "./GalleryPage";
// import PiecePage from "./PiecePage";
// import NavBar from "./NavBar";
// import ArtistProfile from "./ArtistProfile";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';


// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="/main" element={<Main/>}>
//           <Route path="artists" element={<ArtistPage />} />
//           <Route path="directors" element={<DirectorPage/>} />
//           <Route path="galleries" element={<GalleryPage/>} />
//           <Route path="invoices" element={<PiecePage/>} />
//           {/* <Route path="invoices" element={<ArtistProfile />} /> */}
//         </Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(
//   <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
