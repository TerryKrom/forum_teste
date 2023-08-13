import React from 'react'
import './header.css'
import {isLight, setLight} from '../App'

function Header() {
  return (
    <header>
        <nav id="navbar-top" className={`navbar pt-3 pb-3 ${isLight? "":"dark"}`}>
            <div className='container justify-content-between'>
                <a className="navbar-brand d-flex align-items-center">
                    <img src='/logo-cps.png' alt="CPS" width="80" className="me-4 d-inline-block align-text-top" />
                    <span id="header-title" className="mt-1 text-white">Fórum</span>
                </a>
                <div id='account-area' className='account-area d-flex align-items-center'>
                    <a id="login-btn" className="login-btn d-flex align-items-center me-2" to="/">
                        <button type="button" className="btn btn-outline-light">Entre</button>
                    </a>
                    <span className="me-1 text-white">ou</span>
                    <a id="signup-btn" className="signup-btn d-flex align-items-center" href="#">
                        Cadastre-se
                    </a>
                </div>
            </div>
        </nav>
        <nav id="navbar-bottom" className={`navbar pt-2 pb-2 ${isLight? "":"dark"}`}>
        <div className="container">
                <ul className="container navbar-section m-0 d-flex align-items-center justify-content-between">
                    <li className={`navbar-section-item ${isLight? "":"dark"}`}>
                        Matemática
                    </li>
                    <span className={`item-aparter ${isLight? "":"dark"}`}></span>
                    <li className={`navbar-section-item ${isLight? "":"dark"}`}>
                        Física
                    </li>
                    <span className={`item-aparter ${isLight? "":"dark"}`}></span>
                    <li className={`navbar-section-item ${isLight? "":"dark"}`}>
                        Química
                    </li>
                    <span className={`item-aparter ${isLight? "":"dark"}`}></span>
                    <li className={`navbar-section-item ${isLight? "":"dark"}`}>
                        Português e Literatura
                    </li>
                    <span className={`item-aparter ${isLight? "":"dark"}`}></span>
                    <li className={`navbar-section-item ${isLight? "":"dark"}`}>
                        Biologia
                    </li>
                    <span className={`item-aparter ${isLight? "":"dark"}`}></span>
                    <li className={`navbar-section-item ${isLight? "":"dark"}`}>
                        TCC
                    </li>
                    <span className={`item-aparter ${isLight? "":"dark"}`}></span>
                    <li className={`navbar-section-item ${isLight? "":"dark"}`}>
                        Cursos
                    </li>
                    <span className={`item-aparter ${isLight? "":"dark"}`}></span>
                    <li className={`navbar-section-item ${isLight? "":"dark"}`}>
                        Todas as Matérias
                    </li>
                    <span className={`item-aparter ${isLight? "":"dark"}`}></span>
                    <li className="navbar-section-item d-flex">
                        <div className="input-group">
                            <input id="searchbar" type="text" className="form-control" placeholder="Pesquisar" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </li>
                    <li className='navbar-section-item d-flex'>
                        <button className={`btn button-${isLight? "":"dark"}`} onClick={() => setLight(!isLight)}>
                            <i className={isLight? "fa-solid fa-moon light":"fa-solid fa-sun dark"}></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header