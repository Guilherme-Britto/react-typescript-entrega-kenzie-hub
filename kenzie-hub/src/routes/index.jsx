import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import Login from "../pages/Login/Login"
import Register from '../pages/Register/Register'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />

            {/* <Route path='*' element={<h1>404 pagina não encontrada</h1>} /> */}
        </Routes>
    )
}

export default AppRoutes