import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/opeth' onClick={() => props.onSearch('opeth')}>Opeth</NavLink></li>
                <li><NavLink to='/sybreed' onClick={() => props.onSearch('sybreed')}>Sybreed</NavLink></li>
                <li><NavLink to='/lost-in-kiev' onClick={() => props.onSearch('lost in kiev')}>Lost In Kiev</NavLink></li>
                <li><NavLink to='/god-is-an-astronaut' onClick={() => props.onSearch('God is an astronaut')}>God Is An Astronaut</NavLink></li>
                <li><NavLink to='/long-distance-calling' onClick={() => props.onSearch('Long distance calling')}>Long Distance Calling</NavLink></li>
            </ul>
            <NavLink onClick={props.showSearchBar} to='/search' className="search-link">
                Go to search page Show search bar
            </NavLink>
        </nav>
    );
}
export default Navigation;