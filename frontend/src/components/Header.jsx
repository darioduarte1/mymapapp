import { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleOverlayClick = (e) => {
    if (!isMobile || e.target.closest('.menu-content')) {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="app-header">
        <h1 className="app-title">Mi Map APP</h1>
        <button className="hamburger-button" onClick={toggleMenu}>
          ☰
        </button>
      </header>

      {isMenuOpen && (
        <div className="menu-overlay open" onClick={handleOverlayClick}>
          <nav className="menu-content">
            <button className="close-button" onClick={closeMenu}>×</button>
            <ul>
              <li><button className="menu-link" onClick={onOpenModal}>Registrar local</button></li>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Ajustes</a></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;