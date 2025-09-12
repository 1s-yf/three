'use client';

import { ChevronRight } from 'lucide-react';
import { FamilyData } from '@/data/families';

interface FamilySidebarProps {
  selectedFamily: string | null;
  onFamilySelect: (familyId: string | null) => void;
  prominentFamilies: FamilyData[];
}

export default function FamilySidebar({ selectedFamily, onFamilySelect, prominentFamilies }: FamilySidebarProps) {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-60 bg-gradient-to-b from-stone-50 to-stone-100 border-r border-stone-300 shadow-lg z-40 overflow-y-auto">
      <div className="p-4 border-b border-stone-200 bg-gradient-to-r from-amber-50 to-amber-100">
        <h2 className="text-xl font-bold text-stone-800 font-serif text-center">
          皖南十姓
        </h2>
        <p className="text-sm text-stone-600 text-center mt-1">家风荟萃</p>
      </div>

      <nav className="p-3">
        <button
          onClick={() => onFamilySelect(null)}
          className={`w-full text-left p-3 rounded-lg mb-2 transition-all duration-200 group flex items-center space-x-3 ${
            selectedFamily === null
              ? 'bg-gradient-to-r from-amber-100 to-amber-50 border-l-4 border-amber-500 shadow-md'
              : 'hover:bg-stone-100 hover:shadow-sm'
          }`}
        >
          <span className="text-xl">🏠</span>
          <div className="flex-1">
            <h3 className="font-medium text-stone-800">首页</h3>
          </div>
        </button>

        {prominentFamilies.map((family) => (
          <button
            key={family.id}
            onClick={() => onFamilySelect(family.id)}
            className={`w-full text-left p-3 rounded-lg mb-2 transition-all duration-200 group ${
              selectedFamily === family.id
                ? 'bg-gradient-to-r from-amber-100 to-amber-50 border-l-4 border-amber-500 shadow-md'
                : 'hover:bg-stone-100 hover:shadow-sm border-l-4 border-transparent hover:border-stone-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{family.emblem}</span>
              <div className="flex-1">
                <h3 className="font-medium text-stone-800">{family.name}</h3>
                <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                  {family.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-stone-200 bg-gradient-to-t from-stone-100 to-stone-50">
        <div className="text-xs text-stone-500 text-center space-y-1">
          <p>徽派建筑美学</p>
          <p>千年家训传承</p>
        </div>
      </div>
    </aside>
  );
}