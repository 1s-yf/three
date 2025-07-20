'use client';

import { useState } from 'react';
import { Play, Pause, MessageCircle, User } from 'lucide-react';

interface Reflection {
  id: number;
  type: 'text' | 'audio';
  author: string;
  role: string;
  content: string;
  audioDuration?: string;
  date: string;
}

export default function Reflections() {
  // const [selectedReflection, setSelectedReflection] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const reflections: Reflection[] = [
    {
      id: 1,
      type: 'text',
      author: '张同学',
      role: '队长',
      content: '这次三下乡活动让我深刻体会到了农村发展的不易，也让我更加坚定了服务基层的信念。在与村民的交流中，我感受到了他们对美好生活的向往，这种向往正是我们努力的方向。',
      date: '2024-07-16',
    },
    {
      id: 2,
      type: 'audio',
      author: '李同学',
      role: '医疗组组长',
      audioDuration: '3:45',
      content: '在为村民提供医疗服务的过程中，我深刻体会到了基层医疗条件的不足，也更加明白了作为医学生的责任和使命。',
      date: '2024-07-17',
    },
    {
      id: 3,
      type: 'text',
      author: '王同学',
      role: '支教组成员',
      content: '看到孩子们求知的眼神，我深深被触动了。教育不仅仅是传授知识，更是点燃希望。这次支教经历让我更加坚定了成为一名人民教师的决心。',
      date: '2024-07-15',
    },
    {
      id: 4,
      type: 'audio',
      author: '陈同学',
      role: '调研组成员',
      audioDuration: '4:20',
      content: '通过深入调研，我们发现了农村发展中面临的诸多挑战，也找到了很多可以改进的地方。这些发现将为我们后续的研究提供重要参考。',
      date: '2024-07-18',
    },
  ];

  const toggleAudio = (id: number) => {
    if (isPlaying === id) {
      setIsPlaying(null);
    } else {
      setIsPlaying(id);
    }
  };

  return (
    <section id="reflections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">活动心得</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            记录志愿者们的真实感受和深刻体会，分享成长的喜悦与收获
          </p>
        </div>

        <div className="grid gap-8">
          {reflections.map((reflection) => (
            <div key={reflection.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{reflection.author}</h3>
                    <p className="text-red-600 text-sm">{reflection.role}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{reflection.date}</span>
              </div>

              <div className="mb-4">
                {reflection.type === 'audio' ? (
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleAudio(reflection.id)}
                          className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                        >
                          {isPlaying === reflection.id ? (
                            <Pause size={20} />
                          ) : (
                            <Play size={20} />
                          )}
                        </button>
                        <span className="text-sm text-gray-600">
                          {reflection.audioDuration}
                        </span>
                      </div>
                      <MessageCircle className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className="text-gray-700">{reflection.content}</p>
                  </div>
                ) : (
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">{reflection.content}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                  阅读全文 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}