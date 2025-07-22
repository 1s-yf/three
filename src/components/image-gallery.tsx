'use client';

import { GalleryImage } from '@/data/families';
import { useState } from 'react';
import { X, Maximize, Calendar, MapPin, Camera } from 'lucide-react';

interface ImageGalleryProps {
  gallery: GalleryImage[];
  familyColor: string;
}

interface ModalImage {
  image: string;
  title: string;
  description: string;
  year?: number;
  location?: string;
  type: 'ancient' | 'modern';
}

export default function ImageGallery({ gallery, familyColor }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);
  const [compareMode, setCompareMode] = useState<boolean>(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const openModal = (image: GalleryImage, type: 'ancient' | 'modern') => {
    const imageUrl = type === 'ancient' ? image.ancient : image.modern;
    if (imageUrl) {
      setSelectedImage({
        image: imageUrl,
        title: image.title,
        description: image.description,
        year: image.year,
        location: image.location,
        type
      });
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-stone-100 to-stone-50 rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4 font-serif">
            影像资料
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <button
              onClick={() => setCompareMode(!compareMode)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                compareMode
                  ? 'bg-stone-800 text-white'
                  : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
            >
              {compareMode ? '单图模式' : '古今对比'}
            </button>
          </div>
          <p className="text-stone-600 text-lg">
            {compareMode ? '古今对比，见证历史变迁' : '珍贵影像，记录家族记忆'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {compareMode && item.ancient && item.modern ? (
                <div className="relative h-80">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 relative overflow-hidden">
                      <img
                        src={item.ancient}
                        alt={`${item.title} - 古代`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 text-white text-xs">古代</div>
                    </div>
                    <div className="w-1/2 relative overflow-hidden">
                      <img
                        src={item.modern}
                        alt={`${item.title} - 现代`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-2 right-2 text-white text-xs">现代</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => openModal(item, 'ancient')}
                        className="bg-white/90 text-stone-800 px-3 py-1 rounded text-sm hover:bg-white"
                      >
                        古代图
                      </button>
                      <button
                        onClick={() => openModal(item, 'modern')}
                        className="bg-white/90 text-stone-800 px-3 py-1 rounded text-sm hover:bg-white"
                      >
                        现代图
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative h-64">
                  <img
                    src={item.modern || item.ancient}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <button
                      onClick={() => openModal(item, item.modern ? 'modern' : 'ancient')}
                      className="bg-white/90 text-stone-800 p-2 rounded-full hover:bg-white"
                    >
                      <Maximize size={20} />
                    </button>
                  </div>
                </div>
              )}

              <div className="p-4">
                <h3 className="font-semibold text-stone-800 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center space-x-4 text-xs text-stone-500">
                  {item.year && (
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{item.year}</span>
                    </div>
                  )}
                  {item.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin size={12} />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />

            <div className="p-6 bg-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-stone-800">{selectedImage.title}</h3>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  selectedImage.type === 'ancient' 
                    ? 'bg-amber-100 text-amber-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {selectedImage.type === 'ancient' ? '古代' : '现代'}
                </span>
              </div>
              <p className="text-stone-600 mb-4">{selectedImage.description}</p>
              <div className="flex items-center space-x-6 text-sm text-stone-500">
                {selectedImage.year && (
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{selectedImage.year}</span>
                  </div>
                )}
                {selectedImage.location && (
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{selectedImage.location}</span>
                  </div>
                )}
                <div className="flex items-center space-x-1">
                  <Camera size={16} />
                  <span>EXIF信息加载中...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}