import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
       <nav>
        <Link to="/" classname="nav-link">Home</Link>
        <Link to="/show-books" classname="nav-link">Show Books</Link>
        <Link to="/add-book" classname="nav-link">Add Books</Link>
       </nav>
    );
};

export default Navbar;