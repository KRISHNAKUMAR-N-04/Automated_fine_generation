import React from 'react'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css'

function App(){
    return(
        <div>
        <Navbar/>
        <Outlet/>
        </div>
    )
}

export default App;