import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

export default ({match: {url}}) => {
  return (
    <header>
      <div className="navbar">
        <ul>
          <li>{url === '/' ? <Link to="/new" className="btn btn-new">New Story</Link> : <Link to="/" className="btn btn-new">Home</Link>}</li>
          <li className='btn btn-bookmarks'>About</li>
          <li><Link to="/bookmark" className="btn btn-bookmarks">Bookmarks</Link></li>
        </ul>
      </div>
    </header>
  )
}
