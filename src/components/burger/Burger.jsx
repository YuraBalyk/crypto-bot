
import React from 'react';
import './burger.css';

function Burger({ isOpen }) {

    return (
        <div className={`burger ${isOpen ? 'show' : 'hide'}`}>

            <nav className="burger__nav">

                <ul className="burger__list">
                    <li className="burger__item">
                        <a href="" className="burger__link">Home</a>
                    </li>
                    <li className="burger__item">
                        <a href="" className="burger__link">Our features</a>
                    </li>
                    <li className="burger__item">
                        <a href="" className="burger__link">FaQ</a>
                    </li>
                    <li className="burger__item">
                        <a href="" className="burger__link">Docs</a>
                    </li>
                    <li className="burger__item">
                        <a href="" className="burger__link">Risks</a>
                    </li>
                </ul>
                <button type="button" className='button-header header-btn'>Launch app</button>
            </nav>

        </div>
    )
}

export default Burger;