import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/photo/PT.SCT-LOGO.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src={logo} 
              alt="PT. SCT Logo" 
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            {['Home', 'Tentang', 'Visi & Misi', 'Layanan', 'Proyek', 'Kontak'].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item === 'Home' ? 'home' : item === 'Tentang' ? 'about' : item === 'Visi & Misi' ? 'vision' : item === 'Layanan' ? 'services' : item === 'Proyek' ? 'projects' : 'contact')}
                className={`font-medium hover:text-blue-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            {['Home', 'Tentang', 'Visi & Misi', 'Layanan', 'Proyek', 'Kontak'].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item === 'Home' ? 'home' : item === 'Tentang' ? 'about' : item === 'Visi & Misi' ? 'vision' : item === 'Layanan' ? 'services' : item === 'Proyek' ? 'projects' : 'contact')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}