import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './pages/context/AuthContext';
import Home from './pages/Home'
import Login  from './pages/Login'
import Signup  from './pages/components/Signup'
import Signin  from './pages/components/Signin'


function App() {
  return (
    <AuthContextProvider>
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/Signup" element = {<Signup/>}/>
        <Route path = "/Signin" element = {<Signin/>}/>
        </Routes>
    </Router>
    </AuthContextProvider>

  );
}

export default App;
