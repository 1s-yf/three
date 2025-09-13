'use client';

import { families, FamilyData } from '@/data/families';
import { useState } from 'react';


const prominentFamilies = families.filter(f => 
  ['mei', 'hu', 'tao', 'zhu', 'wang', 'xu', 'huang', 'zhang', 'cheng', 'wang_s'].includes(f.id)
);

export default function FamilyGrid() {
  return (
    <section id="family-grid" className="py-20 bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-stone-900 mb-6 font-serif">
            皖南十姓简介
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            千年传承，十姓荟萃，家风家训，代代相传
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {prominentFamilies.map((family) => (
            <div 
              key={family.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200 overflow-hidden group"
            >
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">{family.emblem}</div>
                <h3 className="text-xl font-bold text-stone-800 mb-2 font-serif">{family.name}</h3>
                <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">{family.description}</p>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-amber-600 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-stone-600 italic font-serif">
            &ldquo;十姓传承，文脉绵延&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}