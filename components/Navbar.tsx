import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-10 bg-secondary flex items-center justify-center rounded">
              <span className="text-primary font-black text-lg font-display italic">AB</span>
            </div>
            <span className="font-display text-xl md:text-2xl font-bold tracking-tighter uppercase whitespace-nowrap">
              TIRE SERVICE
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {['Services', 'Reviews', 'Location', 'Contacts'].map((item) => {
              // Mapping English keys to Bulgarian text for display, or just using direct text
              const links: Record<string, string> = {
                'Services': 'Услуги',
                'Reviews': 'Отзиви',
                'Location': 'Локация',
                'Contacts': 'Контакти'
              };
              const hrefs: Record<string, string> = {
                'Services': '#services',
                'Reviews': '#reviews',
                'Location': '#location',
                'Contacts': '#contacts'
              };
              return (
                <a
                  key={item}
                  href={hrefs[item]}
                  className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {links[item]}
                </a>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <a
              href="tel:0899000000"
              className="hidden sm:flex items-center gap-2 text-secondary font-black"
            >
              <span className="material-symbols-outlined text-primary">call</span>
              0899 000 000
            </a>
            <button className="bg-primary hover:bg-orange-600 text-white px-6 py-3 font-bold text-sm transition-all transform active:scale-95 shadow-lg shadow-orange-500/20 uppercase whitespace-nowrap">
              ЗАПАЗИ ЧАС
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-secondary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-4">
          <a onClick={() => setIsMobileMenuOpen(false)} href="#services" className="block text-sm font-bold uppercase tracking-widest text-secondary hover:text-primary">Услуги</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#reviews" className="block text-sm font-bold uppercase tracking-widest text-secondary hover:text-primary">Отзиви</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#location" className="block text-sm font-bold uppercase tracking-widest text-secondary hover:text-primary">Локация</a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#contacts" className="block text-sm font-bold uppercase tracking-widest text-secondary hover:text-primary">Контакти</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;