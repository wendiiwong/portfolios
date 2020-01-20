import React from 'react';
import { Link } from 'react-router-dom';

function SiteLogo() {
    return (
        <span className="main-nav-logo-text">WW</span>
    );
}

function Header() {

    return (
            <header>
                <nav className="main-nav bg-dark">
                    <div className="main-nav-branding">
                        <div className="main-nav-logo">
                            <Link to='/'>
                                <SiteLogo />
                            </Link>
                        </div>
                    </div>
                    <div className="main-nav-links">
                        <div className="main-nav-links-item"><Link to='/projects'>Projects</Link></div>
                        <div className="main-nav-links-item"><Link to='/about'>About</Link></div>
                    </div>
                </nav>
            </header>
    );

}

export default Header;