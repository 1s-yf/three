'use client';

import { useState } from 'react';
import { FamilyData } from '@/data/families';

interface FamilyNavigationProps {
  selectedFamily: string | null;
  onFamilySelect: (familyId: string | null) => void;
  prominentFamilies: FamilyData[];
}

export default function FamilyNavigation({ selectedFamily, onFamilySelect, prominentFamilies }: FamilyNavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] z-40">
      {/* 收缩状态 */}
      <div 
        className={`absolute left-0 top-0 h-full bg-gradient-to-b from-stone-800 to-stone-900 border-r border-stone-700 shadow-xl transition-all duration-300 ${
          isExpanded ? 'w-64' : 'w-16'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="h-full relative">
          <div className="p-3 border-b border-stone-700">
            <div className={`flex items-center ${isExpanded ? 'justify-between' : 'justify-center'}`}>
              {isExpanded && (
                <h3 className="text-sm font-bold text-amber-300 font-serif">
                  六大名门
                </h3>
              )}
              <div className={`text-amber-400 ${isExpanded ? 'text-sm' : 'text-lg'}`}>
                {isExpanded ? '≡' : '≡'}
              </div>
            </div>
          </div>

          <nav className="py-2 space-y-1">
            {prominentFamilies.map((family) => (
              <button
                key={family.id}
                onClick={() => onFamilySelect(family.id)}
                className={`w-full group transition-all duration-200 ${
                  selectedFamily === family.id
                    ? 'bg-amber-600/20 border-l-2 border-amber-400'
                    : 'hover:bg-stone-700/50 border-l-2 border-transparent'
                }`}
              >
                <div className={`flex items-center ${isExpanded ? 'px-3 py-3 space-x-3' : 'px-2 py-2 justify-center'}`}>
                  <span className={`${isExpanded ? 'text-2xl' : 'text-xl'}`}
                    style={{ color: selectedFamily === family.id ? '#fbbf24' : '#d6d3d1' }}
                  >
                    {family.emblem}
                  </span>
                  
                  {isExpanded && (
                    <div className="flex-1 text-left">
                      <h4 className="font-medium text-sm text-stone-100"
                        style={{ color: selectedFamily === family.id ? '#fbbf24' : '#d6d3d1' }}
                      >
                        {family.name}
                      </h4>
                      <p className="text-xs text-stone-400 line-clamp-1">
                        {family.description}
                      </p>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-stone-700 bg-stone-800">
            <button
              onClick={() => onFamilySelect(null)}
              className={`w-full group transition-all duration-200 ${
                selectedFamily === null
                  ? 'bg-amber-600/20 border-l-2 border-amber-400'
                  : 'hover:bg-stone-700/50 border-l-2 border-transparent'
              }`}
            >
              <div className={`flex items-center ${isExpanded ? 'px-3 py-2 space-x-3' : 'px-2 py-2 justify-center'}`}>
                <span className={`${isExpanded ? 'text-lg' : 'text-base'}`}
                  style={{ color: selectedFamily === null ? '#fbbf24' : '#d6d3d1' }}
                >
                  🏠
                </span>
                {isExpanded && (
                  <div className="flex-1 text-left">
                    <h4 className="font-medium text-sm text-stone-100"
                      style={{ color: selectedFamily === null ? '#fbbf24' : '#d6d3d1' }}
                    >
                      返回首页
                    </h4>
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}