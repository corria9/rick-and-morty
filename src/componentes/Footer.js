import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

const Footer = () => {
    return(
        <div>
            <footer className="text-white py-4 bg-dark">
                <div className="container">
                    <nav className="row">
                        <Link to="/" className="col-12 col-md3 d-flex align-items-center justify-content-center">
                            <img src={Logo} className="mx-2" width="120"/>
                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">Rick and Morty</li>
                            <li className="text-center">Esta app fue creada por Juan Armando Coria Fierros para un Proceso de seleccion de Tiger Team para FonYou.</li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">Enlaces</li>
                            <li>
                            <Link className="nav-link text-reset" to='/favorites' >Favoritos</Link>
                            </li>
                            <li>
                            <Link className="nav-link text-reset" to='/about' >Acerca de...</Link>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="font-weight-bold mb-2">Siguenos</li>
                            <li className="d-flex justify-content-between">
                                <i className="bi bi-github" />
                                <i className="bi bi-envelope-at" />
                                <i class="bi bi-whatsapp" />
                                <i class="bi bi-telephone" />
                            </li>
                        </ul>
                        <div className="container">
                            <p className="text-center">Realizadada por Juan Armando Coria Fierros</p>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer