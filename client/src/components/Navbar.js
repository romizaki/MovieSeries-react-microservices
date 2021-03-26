import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({toggle}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="ml-5">
                    <a className="navbar-brand ml-3" to={"/"}>Movie Pocket</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to={"/"}>Home</Link>
                    <Link className="nav-item nav-link" to={"/add-movie"}>Add New Movie</Link>
                    <Link className="nav-item nav-link" to={"/movies"}>Movies</Link>
                    <Link className="nav-item nav-link" to={"/series"}>Series</Link>
                    <Link className="nav-item nav-link" to={"/favourites"}>Favourites</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar