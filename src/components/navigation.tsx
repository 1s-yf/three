'use client';

import { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';

const navItems = [
  { name: '关于我们', href: '#about' },
  { name: '活动花絮', href: '#gallery' },
  { name: '视频回顾', href: '#videos' },
  { name: '时间轴', href: '#timeline' },
  { name: '活动心得', href: '#reflections' },
  { name: '联系我们', href: '#contact' },
];

interface NavigationProps {
  onHomeClick?: () => void;
}

export default function Navigation({ onHomeClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/90 backdrop-blur-md border-b border-stone-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={onHomeClick}
              className="text-stone-100 hover:text-amber-400 transition-colors duration-300 flex items-center space-x-2"
            >
              <Home size={20} />
              <span className="text-xl font-bold font-serif">皖南家风馆</span>
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-stone-300 hover:text-amber-400 px-3 py-2 rounded-none text-sm font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-amber-400"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-300 hover:text-amber-400 p-2 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-stone-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-stone-900/95">
            <button
              onClick={onHomeClick}
              className="text-stone-300 hover:text-amber-400 block px-3 py-2 rounded-none text-base font-medium transition-colors duration-300 border-l-2 border-transparent hover:border-amber-400 hover:bg-stone-800/50 w-full text-left"
            >
              <Home size={20} className="inline mr-2" />
              首页
            </button>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-stone-300 hover:text-amber-400 block px-3 py-2 rounded-none text-base font-medium transition-colors duration-300 border-l-2 border-transparent hover:border-amber-400 hover:bg-stone-800/50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}