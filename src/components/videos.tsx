'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: '前侧团队行进',
    date: '2024-07-15',
    description: '记录团队成员行进过程中的精彩瞬间，展现青春风采与团队精神',
    duration: '00:30',
    src: '/前侧团队行进.MP4',
    thumbnail: '/徽州古城合照.jpg',
  },
  {
    id: 2,
    title: '徽州古城我们来了',
    date: '2024-07-13',
    description: '展示团队抵达徽州古城的激动时刻，感受千年古城的文化魅力',
    duration: '00:15',
    src: '/徽州古城我们来了.MP4',
    thumbnail: '/徽州古城合照.jpg',
  },
  {
    id: 3,
    title: '陶行知教育精神学习',
    date: '2024-07-14',
    description: '陶行知相关学习活动的记录，传承教育家的伟大精神',
    duration: '00:20',
    src: '/陶行知.MP4',
    thumbnail: '/陶行知雕像.jpg',
  },
];

export default function Videos() {
  const [playingVideo, setPlayingVideo] = useState<typeof videos[0] | null>(null);

  const handlePlayVideo = (video: typeof videos[0]) => {
    setPlayingVideo(video);
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">视频回顾</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            通过视频记录，重温活动中的每一个精彩瞬间和感人故事
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="group">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-800 relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                  <p className="text-gray-300 mb-4">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-red-400 text-sm">{video.date}</span>
                    <button 
                      onClick={() => handlePlayVideo(video)}
                      className="text-red-400 hover:text-red-300 text-sm font-medium"
                    >
                      播放视频 →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {playingVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={handleCloseVideo}
        >
          <div className="relative max-w-4xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
              onClick={handleCloseVideo}
            >
              <X size={32} />
            </button>
            
            <div className="bg-black rounded-lg overflow-hidden">
              <video 
                controls 
                autoPlay
                className="w-full h-full"
                src={playingVideo.src}
              >
                您的浏览器不支持视频播放。
              </video>
              <div className="p-4 bg-gray-900">
                <h3 className="text-xl font-bold text-white mb-2">{playingVideo.title}</h3>
                <p className="text-gray-300">{playingVideo.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}