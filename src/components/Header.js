import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="header ui secondary pointing menu">
      <Link to="/" className="site-name link item">
        Twitch React
      </Link>
      <div className="menu-right right menu">
        <Link to="/" className="link item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header;