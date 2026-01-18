import React, { useState } from 'react';
import ColorThemeToggler from './ColorThemeToggler';




function Navbar({ scrollToSection }) {
  const [active, setActive] = useState('About');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleActive = (section) => {
    setActive(section);
    setMobileMenuOpen(false); // Close mobile menu on selection
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'ContactMe', id: 'contactme' }
  ];

  return (
    <>
      {/* ============================================
          DESKTOP SECTION (hidden on mobile)
          ============================================ */}
      <div className="hidden md:block">
        <div className="flex gap-[46px] mt-[57px] font-[Dancing_Script] font-bold text-[40px]">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`cursor-pointer transition-colors duration-300 ${
                active === item.name 
                  ? 'text-current' 
                  : 'hover:text-gray-700'
              }`}
              onClick={() => {
                scrollToSection?.(item.id);
                handleActive(item.name);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <ColorThemeToggler />
      </div>

      {/* ============================================
          MOBILE VIEW (hidden on desktop)
          ============================================ */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/15">
          <div className="flex items-center justify-between px-5 py-4">
            {/* Logo/Brand */}
            <div className="font-[Dancing_Script] font-bold text-2xl">
              Portfolio
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="px-5 pb-5 pt-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`w-full text-left font-[Dancing_Script] font-bold text-3xl py-3 transition-colors duration-300 ${
                    active === item.name
                      ? 'text-current'
                      : 'hover:text-gray-700'
                  }`}
                  onClick={() => {
                    scrollToSection?.(item.id);
                    handleActive(item.name);
                  }}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile Theme Toggler */}
            <div className="px-5 pb-4">
              <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl px-4 py-3 rounded-full border border-white/10">
                <span className="font-semibold text-sm">Theme</span>
                <input
                  type="range"
                  className="flex-1 max-w-[180px]"
                  min="0"
                  max="6"
                  defaultValue="0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to prevent content from hiding under fixed header */}
        <div className="h-16" />
      </div>
    </>
  );
}
export default Navbar
