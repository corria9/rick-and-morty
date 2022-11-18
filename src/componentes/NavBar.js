import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/'>[Rick & Morty]</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" to='/' >Principal</Link>
                    <Link className="nav-link" to='/favorites' >Favoritos</Link>
                    <Link className="nav-link" to='/about' >Acerca de...</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar