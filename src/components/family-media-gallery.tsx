'use client';

import { useState } from 'react';
import { Play, Camera, Video, Image as ImageIcon, X } from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  url: string;
  title: string;
  description?: string;
  date?: string;
}

interface FamilyMediaGalleryProps {
  familyId: string;
  familyName: string;
  familyColor: string;
  mediaItems?: MediaItem[];
}

export default function FamilyMediaGallery({ familyId, familyName, familyColor, mediaItems = [] }: FamilyMediaGalleryProps) {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'photo' | 'video'>('all');

  // Default sample media for demonstration
  const defaultMedia: MediaItem[] = [
    {
      id: `${familyId}-photo-1`,
      type: 'photo',
      url: `/images/families/${familyId}/family-portrait.jpg`,
      title: `${familyName}家族合影`,
      description: '家族重要聚会合影',
      date: '2024年春'
    },
    {
      id: `${familyId}-video-1`,
      type: 'video',
      url: `/videos/families/${familyId}/family-documentary.mp4`,
      title: `${familyName}家族纪录片`,
      description: '记录家族历史与传承',
      date: '2024年'
    },
    {
      id: `${familyId}-photo-2`,
      type: 'photo',
      url: `/images/families/${familyId}/ancestral-home.jpg`,
      title: '祖居老宅',
      description: '家族祖居建筑风貌',
      date: '2023年秋'
    },
    {
      id: `${familyId}-photo-3`,
      type: 'photo',
      url: `/images/families/${familyId}/family-ceremony.jpg`,
      title: '祭祖仪式',
      description: '传统祭祖活动记录',
      date: '2024年清明'
    }
  ];

  const itemsToDisplay = mediaItems.length > 0 ? mediaItems : defaultMedia;
  const filteredItems = itemsToDisplay.filter(item => 
    filterType === 'all' || item.type === filterType
  );

  const openMedia = (item: MediaItem) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-4 font-serif">
            {familyName}家族影像
          </h2>
          <p className="text-stone-600 text-lg">
            光影记录，传承记忆
          </p>
          <div className="w-32 h-1 mx-auto mt-4" style={{ backgroundColor: familyColor }}></div>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filterType === 'all'
                ? 'bg-stone-800 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-100'
            }`}
          >
            <ImageIcon size={16} className="inline-block mr-2" />
            全部
          </button>
          <button
            onClick={() => setFilterType('photo')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filterType === 'photo'
                ? 'bg-stone-800 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-100'
            }`}
          >
            <Camera size={16} className="inline-block mr-2" />
            照片
          </button>
          <button
            onClick={() => setFilterType('video')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filterType === 'video'
                ? 'bg-stone-800 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-100'
            }`}
          >
            <Video size={16} className="inline-block mr-2" />
            视频
          </button>
        </div>

        {/* Media grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => openMedia(item)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center">
                  {item.type === 'photo' ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-200 to-stone-300">
                      <Camera size={48} className="text-stone-400" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900">
                      <Play size={48} className="text-white" />
                    </div>
                  )}
                </div>
                
                <div className="absolute top-2 right-2">
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    item.type === 'photo' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-red-500 text-white'
                  }`}>
                    {item.type === 'photo' ? '照片' : '视频'}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  {item.description && (
                    <p className="text-white/80 text-xs">{item.description}</p>
                  )}
                  {item.date && (
                    <p className="text-white/60 text-xs mt-1">{item.date}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Camera size={48} className="mx-auto text-stone-400 mb-4" />
            <p className="text-stone-500">暂无相关影像资料</p>
          </div>
        )}
      </div>

      {/* Media modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{selectedMedia.title}</h3>
                {selectedMedia.description && (
                  <p className="text-sm text-stone-600">{selectedMedia.description}</p>
                )}
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-4">
              {selectedMedia.type === 'photo' ? (
                <div className="aspect-video bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center">
                  <div className="text-center">
                    <Camera size={64} className="mx-auto text-stone-400 mb-4" />
                    <p className="text-stone-500">照片预览区域</p>
                    <p className="text-sm text-stone-400 mt-2">{selectedMedia.url}</p>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
                  <div className="text-center">
                    <Play size={64} className="mx-auto text-white mb-4" />
                    <p className="text-white">视频播放区域</p>
                    <p className="text-sm text-white/60 mt-2">{selectedMedia.url}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}