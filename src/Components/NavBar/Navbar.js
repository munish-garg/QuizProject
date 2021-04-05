import React from 'react';
import ReactDOM from 'react-dom';
import './navbar.css'

const Navbar = () =>{
    return (
        <>
            <header>
                <nav>
                    <ul id="navigation-links">
                        <li><a href=""><i class="fas fa-question"></i></a></li>
                        <li><a href="">Quiz App</a></li>
                        <li><a href="">Login</a></li>
                        <li><a href="">SignUp</a></li>
                    </ul>       
                </nav>
            </header>
        </>
    );
}

export default Navbar;