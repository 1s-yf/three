'use client';

import { BiographySection } from '@/data/families';
import { useState } from 'react';

interface BiographyNarrativeProps {
  biography: BiographySection[];
  familyColor: string;
  familyName: string;
}

export default function BiographyNarrative({ biography, familyColor, familyName }: BiographyNarrativeProps) {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  return (
    <section className="py-12 bg-white rounded-xl shadow-lg">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4 font-serif">
            生平事迹
          </h2>
          <p className="text-stone-600 text-lg">
            {familyName}家族的辉煌历程
          </p>
        </div>

        <div className="space-y-8">
          {biography.map((section, index) => (
            <article
              key={index}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                expandedSection === index
                  ? 'shadow-lg border-stone-300'
                  : 'shadow-sm border-stone-200 hover:shadow-md'
              }`}
            >
              <header
                className="p-6 cursor-pointer bg-gradient-to-r from-stone-50 to-white hover:from-stone-100"
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
              >
                <h3 className="text-xl font-semibold text-stone-800 mb-2 font-serif">{section.title}</h3>
                <div className="flex items-center text-sm text-stone-600">
                  <span className="inline-block w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: familyColor }}
                  ></span>
                  <span>点击查看详情</span>
                </div>
              </header>

              <div className={`transition-all duration-500 ${
                expandedSection === index ? 'max-h-96' : 'max-h-0'
              } overflow-hidden`}>
                <div className="p-6 border-t border-stone-200">
                  <div className="prose prose-stone max-w-none">
                    <p className="text-stone-700 leading-relaxed text-lg font-sans">{section.content}</p>
                  </div>

                  {section.image && (
                    <div className="mt-6">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                      <p className="text-sm text-stone-600 mt-2 text-center italic">{section.title}相关图片</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}