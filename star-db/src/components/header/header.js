import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div>
                    <ul className="nav">
                        <li><a href="/" className="navbar-brand">Start-DB</a></li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">People</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Planets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Starships</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;