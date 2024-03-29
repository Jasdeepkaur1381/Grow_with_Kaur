import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-white">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">GrowKaur</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact to="/about">About</NavLink>
                                        </li>



                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;