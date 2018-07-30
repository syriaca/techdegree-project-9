import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const Navigation = (props) => {
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/cats' onClick={props.click}>Cats</NavLink></li>
                <li><NavLink to='/dogs' onClick={props.click}>Dogs</NavLink></li>
                <li><NavLink to='/computers' onClick={props.click}>Computers</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;