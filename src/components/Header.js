import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

const Header = (props) => {
    return(
        <header className='header'>
            <Route exact path="/search" component={() => <SearchForm onSearch={props.onSearch}/> } />
            <Navigation showSearchBar={props.showSearchBar} onSearch={props.onSearch} data={props.data} />        
        </header>
    );
};

export default Header;