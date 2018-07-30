import React from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

const Header = (props) => {
    return(
        <header className='header'>        
            <SearchForm />
            <Navigation click={props.click} data={props.data} />        
        </header>
    );
};

export default Header;