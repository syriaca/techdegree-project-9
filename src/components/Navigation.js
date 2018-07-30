import React from 'react';
import { NavLink, Route} from 'react-router-dom';
import PhotoContainer from './PhotoContainer';


const Navigation = (props) => {
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to={'/cats'} onClick={props.click}>Cats</NavLink></li>
                <li><NavLink to='/dogs' onClick={props.click}>Dogs</NavLink></li>
                <li><NavLink to='/computers' onClick={props.click}>Computers</NavLink></li>
            </ul>
            <Route path="/cats" render={() => <PhotoContainer data={props.data}/>} />
            <Route path="/dogs" render={() => <PhotoContainer data={props.data}/>} />
            <Route path="/computers" render={() => <PhotoContainer data={props.data}/>} />
        </nav>
    );
};

export default Navigation;