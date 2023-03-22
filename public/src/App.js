import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Secret from "./pages/Secret"
import Home from "./pages/Home"
import Edit from "./pages/Edit"
import AdminLogin from "./pages/AdminLogin"






import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  exact path="/register" element={<Register/>} />
      <Route  exact path="/login" element={<Login/>} />

      <Route  exact path="/" element={<Secret/>} />
      <Route  exact path="/profile" element={<Secret/>} />
      {/* <Route  exact path="/home" element={<Home/>} /> */}
      <Route  exact path="/admin/adduser" element={<Register admin={true}/>} />
      <Route  exact path="/admin" element={<Home/>} />
      <Route  exact path="/admin/edit" element={<Edit/>} />
      <Route  exact path="/admin/login" element={<AdminLogin/>} />





      



    </Routes>
    
    </BrowserRouter>
  )
}
