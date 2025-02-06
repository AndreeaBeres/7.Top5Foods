import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/europe">Europe</Link></li>
                <li><Link to="/asia">Asia</Link></li>
                <li><Link to="/america">America</Link></li>
                <li><Link to="/africa">Africa</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;