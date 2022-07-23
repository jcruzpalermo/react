import CartWidget from "../CartWidget"
import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <NavLink className="nav_link" to="/">Marca</NavLink>
                </div>
                <ul className="nav_list">
                    <li>
                        <NavLink className="nav_link" to="/categoria/1">Categoria 1</NavLink>
                    </li>
                    <li><NavLink className="nav_link" to="/categoria/2">Categoria 2</NavLink>
                    </li>
                    <li><NavLink className="nav_link" to="/cart"> 
                    <CartWidget/>
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;