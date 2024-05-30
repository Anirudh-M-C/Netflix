import React, { useEffect, useState } from 'react';
import "./navbar.css";
import "./app.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="Netflix logo" />
      <div className='navbar_2'>
        <li>Home</li>
        <li>Movies</li>
        <li>Series</li>
        <li>My list</li>
        <li><input className='search-input' type="search" placeholder='Search for Movies,Series..' /></li>
      </div>
      <img className='avatar' src="https://loodibee.com/wp-content/uploads/Netflix-avatar-11.png" alt="" />
    </div>
  );
}

export default Navbar;
