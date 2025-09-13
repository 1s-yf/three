'use client';

import { familyNotesComplete } from '@/data/family-notes-complete';
import { BookOpen, Calendar, User, Tag } from 'lucide-react';

interface FamilyNotesCompleteProps {
  familyId: string;
  familyName: string;
  familyColor: string;
}

export default function FamilyNotesComplete({ familyId, familyName, familyColor }: FamilyNotesCompleteProps) {
  const notes = familyNotesComplete[familyId] || [];

  if (notes.length === 0) {
    return (
      <section className="py-12 bg-white rounded-xl shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-stone-800 mb-4 font-serif">
              {familyName}家风札记
            </h2>
            <p className="text-stone-600 text-lg">
              暂无相关札记内容
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4 font-serif">
            {familyName}家风札记
          </h2>
          <p className="text-stone-600 text-lg">
            深度文化记录与家族精神传承
          </p>
          <div className="w-32 h-1 mx-auto mt-6" style={{ backgroundColor: familyColor }}></div>
        </div>

        <div className="grid gap-8">
          {notes.map((note, index) => (
            <article 
              key={note.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 overflow-hidden"
              style={{ borderLeftColor: familyColor }}
            >
              <div className="bg-gradient-to-br from-stone-50 to-white p-1">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-stone-100 rounded-lg flex items-center justify-center shadow-sm" style={{ backgroundColor: `${familyColor}20` }}>
                        <BookOpen size={24} style={{ color: familyColor }} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-stone-800 font-serif leading-tight mb-2">
                        {note.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center px-3 py-1 bg-stone-100 rounded-full">
                          <Tag size={12} className="mr-1 text-stone-600" />
                          <span className="text-stone-700 font-medium">{note.category}</span>
                        </div>
                        {note.author && (
                          <div className="flex items-center text-stone-600">
                            <User size={12} className="mr-1" />
                            <span>{note.author}</span>
                          </div>
                        )}
                        {note.date && (
                          <div className="flex items-center text-stone-500">
                            <Calendar size={12} className="mr-1" />
                            <span>{note.date}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-stone-100 pt-6">
                    <div className="text-stone-800 leading-relaxed text-lg space-y-6" style={{ fontFamily: 'KaiTi, serif', lineHeight: '1.9' }}>
                      {note.content.split('\n\n').map((paragraph, pIndex) => {
                        const trimmed = paragraph.trim();
                        if (!trimmed) return null;
                        
                        // 检测标题段落
                        const isTitle = trimmed.length < 30 && (trimmed.includes('：') || trimmed.match(/^[一二三四五六七八九十]+、/));
                        
                        if (isTitle) {
                          return (
                            <h4 key={pIndex} className="text-xl font-bold text-stone-800 mt-8 mb-4 font-serif border-b border-stone-200 pb-2" style={{ color: familyColor }}>
                              {trimmed}
                            </h4>
                          );
                        }
                        
                        return (
                          <p key={pIndex} className="mb-4" style={{ textIndent: '2em' }}>
                            {trimmed}
                          </p>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100">
                    <div className="flex items-center text-xs text-stone-500">
                      <span className="mr-2">💎</span>
                      <span>皖南家风探寻团队整理</span>
                      <span className="mx-2">•</span>
                      <span>传承文化，致敬先贤</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-stone-100 to-stone-50 p-6 rounded-lg border border-stone-200">
            <p className="text-lg text-stone-700 italic font-serif mb-2">
              &ldquo;一字一句，皆是家风传承；一文一札，尽是文化记忆&rdquo;
            </p>
            <p className="text-sm text-stone-600">
              本栏目内容由<strong className="text-stone-800">皖南家风探寻团队</strong>撰写整理
            </p>
            <p className="text-sm text-stone-500 mt-1">
              如有不足，敬请指正 | 传承文化，我们一直在路上
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}