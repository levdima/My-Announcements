import React from 'react';
import {Link} from  'react-router-dom'
import './Header.css'
const Header=(props)=> {
    return (
        
        <header className='container'>
          <Link className='box' to="/list">List of Announcements  </Link>
          <Link className='box' to="/create-todo">Add new Announcement</Link>
          <Link className='box' to="/search">Search Announcements</Link>
          </header>
    );
}

export default Header;