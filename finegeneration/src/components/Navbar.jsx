import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="nav-left">
                    <img src={logo} alt="Description of the image" className="img" />
                    <ul className="nav-ul">
                        <li className="nav-list"><Link to="/" className="nav-link"><p>Home</p></Link></li>
                        <li className="nav-list"><Link to="/history" className="nav-link"><p>History</p></Link></li>
                        <li className="nav-list"><Link to="/fine" className="nav-link"><p>Fine</p></Link></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <ul className="nav-ul">
                        <li className="nav-list"><Link to="/help" className="nav-link"><p>Help</p></Link></li>
                    </ul>
                </div>

            </div>


















            { /* <ul className="Navbar">
        <div  className="nav-right">
                <img src={logo} alt="Description of the image" className="img" />
                <li>
                    <Link to="/" className="nav-link"><p>Home</p></Link>
                </li>
                <li><Link to="/history" className="nav-link"><p>History</p></Link></li>
                <li><Link to="/fine" className="nav-link"><p>Fine</p></Link></li>
                
            </ul>

            <ul className="nav-left">
            <li><Link to="/help" className="nav-link"><p>Help</p></Link></li>
            </ul>
        </ul> */}



        </>
    )
}

export default Navbar;