'use client';

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-400/90">
        <div className="absolute inset-0 bg-red-600/10"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          青春奉献
          <br />
          <span className="text-red-200">三下乡活动</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-red-100">
          深入基层，服务人民，在实践中成长，在奉献中收获
        </p>
        
        <button
          onClick={scrollToNext}
          className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center group"
        >
          了解更多
          <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="text-white/70 hover:text-white transition-colors"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}