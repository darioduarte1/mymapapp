import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleOverlayClick = (e) => {
    if (!isMobile) {
      // En desktop: clic en overlay gris o menú → cierra
      closeMenu();
    } else if (e.target.closest('.menu-content')) {
      // En móvil: solo cerrar si clicas dentro del menú blanco
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
        <button className="hamburger-button" onClick={toggleMenu} aria-label="Menú">
          ☰
        </button>
      </header>

      {isMenuOpen && (
        <div className="menu-overlay open" onClick={handleOverlayClick}>
          <nav className="menu-content">
            <button className="close-button" onClick={closeMenu}>×</button>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Mapa</a></li>
              <li><a href="#">Ajustes</a></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;