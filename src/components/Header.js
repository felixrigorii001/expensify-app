import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> |&nbsp;
            <NavLink to="/create" activeClassName="is-active">Create</NavLink> |&nbsp;
            
        </div>
    </header>
);

export default Header;