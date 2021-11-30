import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header ui secondary pointing menu">
      <Link to="/" className="site-name link item">
        Streamy
      </Link>
      <div className="menu-right right menu">
        <Link to="/" className="link item">
          All Streams
        </Link>
      </div>
    </div>
  )
}

export default Header;