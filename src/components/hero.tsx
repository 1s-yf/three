'use client';

import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreClick?: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreFamilies = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      scrollToNext();
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight font-serif">
            皖南家风展示馆
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
        </div>
        
        <p className="text-2xl md:text-3xl mb-4 text-stone-200 font-light tracking-wide">
          合肥工业大学宣城校区
        </p>
        <p className="text-xl md:text-2xl mb-12 text-stone-300 font-light">
          三下乡社会实践队伍
        </p>
        
        <div className="mb-12">
          <p className="text-lg text-stone-400 max-w-3xl mx-auto leading-relaxed font-serif">
            传承千年家风文化，弘扬中华传统美德<br/>
            探寻六大名门家训，感悟文化深厚底蕴
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleExploreFamilies}
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-4 rounded-lg text-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all duration-300 inline-flex items-center group shadow-lg"
          >
            探索名门家训
            <ChevronDown className="ml-3 group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </button>
          
          <button
            onClick={scrollToNext}
            className="border border-stone-400 text-stone-200 px-10 py-4 rounded-lg text-lg font-medium hover:bg-stone-700/50 transition-all duration-300 inline-flex items-center group backdrop-blur-sm"
          >
            了解更多
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="text-stone-400 hover:text-stone-200 transition-colors duration-300"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm font-light tracking-wider">向下探索</span>
            <ChevronDown size={28} className="animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}