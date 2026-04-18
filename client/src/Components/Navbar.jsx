import React from "react";
import logo from '../Assets/logo.png';
import './navbar.css';
function Navbar() {
    const user = 1;
  return (
    <div >
     <nav className="nav1">
        <ul>
            <div className="img">
                <img src={logo} alt="Logo" />
            </div>
            <div className="elem">
                <p id="int" className="">Internships<i class="bi bi-caret-down-fill"></i></p>
                <p>Jobs<i class="bi bi-caret-down-fill"></i></p>
            </div>
            <div className="search">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="search"></input>
            </div>
            <div className="auth">
            <button className="btn1">Login</button>
            <button className="btn2">Register</button>
            </div>
            <div className="flex mt-7 hire">
                  Hire-talent
            </div>
            <div className="admin">
                <button>Admin</button>
            </div>
        </ul>
     </nav>
    </div>
  );
}

export default Navbar;
