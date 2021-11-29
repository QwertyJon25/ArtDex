import './App.css';
// import NavBar from './NavBar';
// import Main from "./Main"
import React, {useState, useEffect} from 'react';
import { Switch, Route, Routes } from 'react-router-dom'


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

    <div className="App">
        
    </div>
  )
}


export default AuthenticatedApp;