'use client';

import { FamilyMember } from '@/data/families';
import { useState } from 'react';
import { Calendar, MapPin, User, Award, BookOpen } from 'lucide-react';

interface FamilyTimelineProps {
  members: FamilyMember[];
  familyColor: string;
}

export default function FamilyTimeline({ members, familyColor }: FamilyTimelineProps) {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const sortedMembers = [...members].sort((a, b) => a.birthYear - b.birthYear);

  return (
    <section className="py-12 bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4 font-serif">
            家族成员
          </h2>
          <p className="text-stone-600 text-lg">
            世代传承，薪火相传
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-stone-200 via-stone-300 to-stone-200 rounded-full"></div>
          
          <div className="space-y-12">
            {sortedMembers.map((member, index) => (
              <div
                key={member.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10"
                  style={{ backgroundColor: familyColor }}
                ></div>
                
                {/* Content card */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}
                >
                  <div
                    className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 hover:border-l-8 ${
                      selectedMember === member.id ? 'border-l-8 shadow-xl' : 'border-stone-300'
                    }`}
                    style={{ borderLeftColor: selectedMember === member.id ? familyColor : undefined }}
                    onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                  >
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-stone-800 mb-1 font-serif">{member.name}</h3>
                      <p className="text-sm font-medium text-stone-600">{member.title}</p>
                    </div>
                    
                    <div className="space-y-2 text-sm text-stone-600">
                      <div className={`flex items-center ${
                        index % 2 === 0 ? 'justify-end space-x-reverse' : 'justify-start'
                      } space-x-2`}>
                        <Calendar size={14} />
                        <span>{member.birthYear} - {member.deathYear || '至今'}</span>
                      </div>
                      
                      {member.location && (
                        <div className={`flex items-center ${
                          index % 2 === 0 ? 'justify-end space-x-reverse' : 'justify-start'
                        } space-x-2`}>
                          <MapPin size={14} />
                          <span>{member.location}</span>
                        </div>
                      )}
                    </div>

                    {selectedMember === member.id && (
                      <div className="mt-4 pt-4 border-t border-stone-200">
                        <p className="text-sm text-stone-700 leading-relaxed font-sans">
                          {member.biography}
                        </p>
                        
                        {member.achievements && member.achievements.length > 0 && (
                          <div className="mt-3">
                            <h4 className="text-xs font-semibold text-stone-600 mb-2 flex items-center">
                              <Award size={12} className="mr-1" />
                              主要成就：
                            </h4>
                            <ul className="text-xs text-stone-600 space-y-1">
                              {member.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: familyColor }}></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {member.image && (
                          <div className="mt-4">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-48 object-cover rounded-md shadow-sm"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}