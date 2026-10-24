"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'HOME', href: '#home' },
    { name: 'MENU', href: '#menu' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="bg-cream border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-terracotta flex items-center justify-center flex-shrink-0">
              <img src="/images/logo.jpeg" alt="Annai Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-base md:text-2xl font-serif text-terracotta font-semibold tracking-wide leading-tight">
                Annai Family Restaurant
              </h1>
              <p className="text-[8px] md:text-[10px] tracking-widest text-muted uppercase mt-1 hidden sm:block">
                A Neighborhood Table
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm tracking-widest text-charcoal hover:text-terracotta transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <a href="#contact" className="border border-charcoal px-6 py-3 text-xs tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-colors">
              Find Your Way
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-charcoal" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-border absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-sm tracking-widest text-charcoal border-b border-gray-200 hover:text-terracotta"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a 
                href="#contact"
                className="block mt-4 text-center border border-charcoal px-6 py-3 text-xs tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Find Your Way
              </a>
          </div>
        </div>
      )}
    </header>
  );
}