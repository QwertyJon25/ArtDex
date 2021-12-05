import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login'
import Signup from './SignUp'

function UnauthenticatedApp({ setCurrentUser }) {
    return (
    <BrowserRouter>
    <Routes>
        <Route path="login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="signup" element={<Signup setCurrentUser={setCurrentUser}/>} />
        <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
        </Routes>
    </BrowserRouter>
)
}

export default UnauthenticatedApp