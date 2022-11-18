import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <div>
            <Link to='/'>Rick & Morty</Link>
            <div>
                <div>
                    <Link to='/' >Principal</Link>
                    <Link to='/favorites' >Favoritos</Link>
                    <Link to='/about' >Acerca de...</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar