import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { path: '/', label: 'Beranda' },
  { path: '/favorites', label: 'Favorit' },
  { path: '/about', label: 'Tentang' },
];

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="sticky top-4 z-50 px-4 md:px-margin-desktop mb-md">
      <nav className="max-w-7xl mx-auto bg-surface border-[3px] border-border rounded-full px-lg py-sm grid grid-cols-3 items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full pointer-events-auto transition-colors duration-300">
        {/* Logo */}
        <div className="flex justify-start">
          <Link
            to="/"
            className="font-headline-lg text-2xl font-black text-text-primary font-headline-xl"
          >
            PromptVault
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center">
          <div className="relative flex gap-lg items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative pb-1 font-bold transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Theme Toggle + Mobile Menu Button */}
        <div className="flex justify-end items-center gap-sm">
          {/* Dark Mode Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-border rounded-full bg-surface-variant flex items-center justify-center hover:bg-primary-container transition-all duration-300 cursor-pointer"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="material-symbols-outlined text-xl">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-2 border-border rounded-full bg-surface-variant flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute left-4 right-4 top-[70px] bg-surface border-[3px] border-border rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-lg z-50 transition-colors duration-300">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-3 px-4 font-bold rounded-xl transition-all ${
                location.pathname === item.path
                  ? 'text-primary bg-primary/10'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
