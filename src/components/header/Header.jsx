
import React from "react";
import './header.css'
import logoImg from '../../img/header/logo.svg';

function Header({ toggleMenu, isMenuOpen }) {
    return (
        <header className='header'>
            <div className="header__container container">
                <div className="header__wrap">
                    <div className="header__logo">
                        <img src={logoImg} alt="logo" />
                        {/* <span>arbibot</span> */}
                    </div>
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="" className="nav__link active">Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="" className="nav__link">Our features</a>
                            </li>
                            <li className="nav__item">
                                <a href="" className="nav__link">FaQ</a>
                            </li>
                            <li className="nav__item">
                                <a href="" className="nav__link">Docs</a>
                            </li>
                            <li className="nav__item">
                                <a href="" className="nav__link">Risks</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__button ">
                        <button type="button" className='button-header'>Launch app</button>
                    </div>
                    <button type="button" className={`burger-button ${isMenuOpen ? 'opened' : ''}`} onClick={toggleMenu}>
                <span></span>
            </button>
                </div>
            </div>
        </header>
    )
}

export default Header;