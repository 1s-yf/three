'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface Photo {
  id: number;
  title: string;
  category: string;
}

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    { id: 1, title: '团队合影', category: '集体照' },
    { id: 2, title: '义诊现场', category: '医疗活动' },
    { id: 3, title: '支教课堂', category: '教育活动' },
    { id: 4, title: '文艺晚会', category: '文化活动' },
    { id: 5, title: '调研走访', category: '调研活动' },
    { id: 6, title: '农家体验', category: '生活体验' },
    { id: 7, title: '村民交流', category: '互动交流' },
    { id: 8, title: '成果展示', category: '活动总结' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">活动花絮</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            记录活动中的精彩瞬间，每一张照片都承载着难忘的回忆和深刻的体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-red-600 text-xs">照片
                        <br />占位
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">{photo.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 transition-colors"></div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900 mb-1">{photo.title}</h3>
                <p className="text-sm text-red-600">{photo.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={32} />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600">大图占位</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedPhoto.title}</h3>
                  <p className="text-red-600">{selectedPhoto.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}