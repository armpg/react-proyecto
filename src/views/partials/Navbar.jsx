import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Cambia el estado del menú
  };

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <Link to="/">Logo</Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li><Link to="/home" className="text-white">Home</Link></li>
              <li><Link to="/nosotros" className="text-white">About</Link></li>
              <li><Link to="/contactanos" className="text-white">Contact</Link></li>
              <li><Link to="/catalogo" className="text-white">Catalog</Link></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Aquí se controla si el menú está abierto o cerrado */}
        <div className={`mobile-menu ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className="mt-4 space-y-4">
            <li><Link to="/home" className="block px-4 py-2 text-white bg-gray-900 rounded">Home</Link></li>
            <li><Link to="/nosotros" className="block px-4 py-2 text-white bg-gray-900 rounded">About</Link></li>
            <li><Link to="/contactanos" className="block px-4 py-2 text-white bg-gray-900 rounded">Contact</Link></li>
            <li><Link to="/catalogo" className="block px-4 py-2 text-white bg-gray-900 rounded">Catalog</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

