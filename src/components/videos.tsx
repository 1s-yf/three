'use client';

const videos = [
  {
    id: 1,
    title: '三下乡活动纪录片',
    date: '2024-07-15',
    description: '完整记录本次三下乡活动的全过程',
    duration: '15:30',
  },
  {
    id: 2,
    title: '支教课堂精彩瞬间',
    date: '2024-07-12',
    description: '记录志愿者们为当地孩子上课的温馨画面',
    duration: '8:45',
  },
  {
    id: 3,
    title: '医疗义诊活动回顾',
    date: '2024-07-10',
    description: '展示医疗组为村民提供健康服务的场景',
    duration: '12:20',
  },
  {
    id: 4,
    title: '文艺晚会全程录像',
    date: '2024-07-14',
    description: '记录与当地村民共同举办的文艺晚会',
    duration: '45:00',
  },
];

export default function Videos() {
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                        </svg>
                      </div>
                      <p className="text-white text-sm">视频播放器占位</p>
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
                    <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                      播放视频 →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}