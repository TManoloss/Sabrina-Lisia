'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-balaio-green/95 border-white/20' 
        : 'bg-balaio-beige/95 border-balaio-dark/10'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${
              isScrolled ? 'bg-white' : 'bg-balaio-green'
            }`}>
              <span className={`font-serif font-bold text-xl transition-all duration-500 ease-in-out ${
                isScrolled ? 'text-balaio-green' : 'text-white'
              }`}>SL</span>
            </div>
            <span className={`font-serif text-xl font-semibold hidden sm:block transition-all duration-500 ease-in-out ${
              isScrolled ? 'text-white' : 'text-balaio-dark'
            }`}>
              Sabrina Lísia
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-all duration-500 ease-in-out ${
                isScrolled 
                  ? 'text-white hover:text-balaio-beige' 
                  : 'text-balaio-dark hover:text-balaio-green'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/portfolio" 
              className={`font-medium transition-all duration-500 ease-in-out ${
                isScrolled 
                  ? 'text-white hover:text-balaio-beige' 
                  : 'text-balaio-dark hover:text-balaio-green'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              href="/sobre" 
              className={`font-medium transition-all duration-500 ease-in-out ${
                isScrolled 
                  ? 'text-white hover:text-balaio-beige' 
                  : 'text-balaio-dark hover:text-balaio-green'
              }`}
            >
              Sobre
            </Link>
            <Link 
              href="/contato" 
              className={`inline-block px-8 py-3 font-medium tracking-wide transition-all duration-500 ease-in-out ${
                isScrolled 
                  ? 'bg-white text-balaio-green hover:bg-balaio-beige' 
                  : 'bg-balaio-green text-white hover:bg-opacity-90'
              }`}
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 transition-all duration-500 ease-in-out ${
                isScrolled ? 'bg-white' : 'bg-balaio-dark'
              } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 transition-all duration-500 ease-in-out ${
                isScrolled ? 'bg-white' : 'bg-balaio-dark'
              } ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 transition-all duration-500 ease-in-out ${
                isScrolled ? 'bg-white' : 'bg-balaio-dark'
              } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-all duration-500 ease-in-out ${
            isScrolled ? 'border-white/20' : 'border-balaio-dark/10'
          }`}>
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`font-medium transition-all duration-500 ease-in-out ${
                  isScrolled 
                    ? 'text-white hover:text-balaio-beige' 
                    : 'text-balaio-dark hover:text-balaio-green'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/portfolio" 
                className={`font-medium transition-all duration-500 ease-in-out ${
                  isScrolled 
                    ? 'text-white hover:text-balaio-beige' 
                    : 'text-balaio-dark hover:text-balaio-green'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/sobre" 
                className={`font-medium transition-all duration-500 ease-in-out ${
                  isScrolled 
                    ? 'text-white hover:text-balaio-beige' 
                    : 'text-balaio-dark hover:text-balaio-green'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                href="/contato" 
                className={`inline-block px-8 py-3 font-medium tracking-wide text-center transition-all duration-500 ease-in-out ${
                  isScrolled 
                    ? 'bg-white text-balaio-green hover:bg-balaio-beige' 
                    : 'bg-balaio-green text-white hover:bg-opacity-90'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}