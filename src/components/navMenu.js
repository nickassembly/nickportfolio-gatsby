import React from 'react';
import { Link } from 'gatsby';
import navMenuStyles from './navmenu.module.scss'

const NavMenu = () => {
    return (
        <header className={navMenuStyles}>
            <nav >
                <ul >
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/work">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default NavMenu;