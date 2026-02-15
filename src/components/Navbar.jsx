import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Navbar
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/netflixhome">Netflix Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/netflixshows">Shows</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/netflixmovies">Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/fundemo1">Function Demo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/usestatedemo1">useState Demo 1</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/usestatedemo2">useState Demo 2</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/usestatedemo3">useState Demo 3</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employess</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
