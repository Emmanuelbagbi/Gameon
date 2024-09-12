// GlassmorphicHamburgerMenu.jsx
import { useState } from 'react';
import './Hamburger.css';

const GlassmorphicHamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    

  return (
    <div className="hamburger-menu">
      <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
        <div className="hamburger-menu">
      <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Games</a></li>
          <li><a href="/services">Faq</a></li>
          <li><a href="/contact">Chat</a></li>
        </ul>
      </nav>
    </div>
    </div>

  );
};

export default GlassmorphicHamburgerMenu;

