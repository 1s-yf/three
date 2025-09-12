'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface Photo {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
}

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos: Photo[] = [
    { id: 1, title: '校门口合照', category: '集体照', src: '/校门口合照.jpg', alt: '团队在校门口的合照' },
    { id: 2, title: '徽州古城合照', category: '集体照', src: '/徽州古城合照.jpg', alt: '团队在徽州古城的合照' },
    { id: 3, title: '祠堂合照', category: '集体照', src: '/祠堂合照.jpg', alt: '团队在祠堂前的合照' },
    { id: 4, title: '参观学习', category: '活动记录', src: '/参观.jpg', alt: '团队成员参观学习' },
    { id: 5, title: '孝文化学习', category: '文化体验', src: '/孝.jpg', alt: '孝文化学习体验' },
    { id: 6, title: '家风馆参观', category: '文化体验', src: '/家风馆.jpg', alt: '参观家风馆' },
    { id: 7, title: '古建筑欣赏', category: '文化体验', src: '/建筑.jpg', alt: '古建筑欣赏' },
    { id: 8, title: '泾县桃花潭', category: '景点参观', src: '/泾县桃花潭.jpg', alt: '泾县桃花潭景区' },
    { id: 9, title: '梅曾亮故居', category: '文化参观', src: '/梅曾亮.jpg', alt: '参观梅曾亮故居' },
    { id: 10, title: '王稼祥故居', category: '红色教育', src: '/王稼祥.jpg', alt: '参观王稼祥故居' },
    { id: 11, title: '陶行知雕像', category: '文化参观', src: '/陶行知雕像.jpg', alt: '陶行知雕像前合影' },
    { id: 12, title: '采访活动', category: '调研活动', src: '/采访.jpg', alt: '团队成员进行采访' },
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
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedPhoto.title}</h3>
                <p className="text-red-600">{selectedPhoto.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}