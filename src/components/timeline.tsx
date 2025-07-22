'use client';

const timelineEvents = [
  {
    date: '2024-07-01',
    title: '出发动员大会',
    description: '在合肥工业大学宣城校区举行出发动员大会，明确家风文化传承活动的目标和任务分工。',
    location: '学校礼堂',
  },
  {
    date: '2024-07-03',
    title: '抵达皖南古村',
    description: '团队安全抵达皖南地区，与当地村委会和文化传承人对接，深入了解当地家风文化背景。',
    location: '宏村村委会',
  },
  {
    date: '2024-07-05',
    title: '家风文化调研启动',
    description: '深入村民家中，走访当地德高望重的长辈，收集整理珍贵的家风故事和传统家训。',
    location: '村民家中',
  },
  {
    date: '2024-07-08',
    title: '传统文化教育课程',
    description: '为当地中小学生开展家风家训教育课程，通过讲故事、互动体验等形式传承优秀文化。',
    location: '村小学',
  },
  {
    date: '2024-07-10',
    title: '家风文化展览筹备',
    description: '整理调研成果，设计制作家风文化展板，准备文化展览活动，展示皖南地区深厚的家风底蕴。',
    location: '村文化广场',
  },
  {
    date: '2024-07-12',
    title: '家风文化展览开幕',
    description: '举办"皖南家风文化展"，通过图片、文字、实物等多种形式，向村民和游客展示当地优秀家风文化。',
    location: '村文化广场',
  },
  {
    date: '2024-07-14',
    title: '调研成果分享会',
    description: '向当地政府和村委会汇报调研成果，为皖南地区家风文化传承和乡村振兴提供建议和方案。',
    location: '镇政府会议室',
  },
  {
    date: '2024-07-15',
    title: '活动总结返程',
    description: '完成全部家风文化传承活动，举行总结大会，与当地村民依依惜别后返程。',
    location: '村委会',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-stone-100 to-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-stone-900 mb-6 font-serif">文化传承时间轴</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-stone-600 to-stone-400 mx-auto mb-8"></div>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed font-light">
            记录皖南家风文化传承活动的每一个重要时刻，见证传统文化的魅力与活力
          </p>
        </div>

        <div className="relative">
          {/* 中心线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-stone-600 to-stone-400"></div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-center">
                {/* 时间点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-stone-600 rounded-full border-4 border-stone-200 shadow-lg z-10">
                  <div className="w-2 h-2 bg-stone-200 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* 内容 */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'ml-auto pl-12'}`}>
                  <div className="bg-white p-8 rounded-lg border border-stone-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}">
                      <span className="text-sm font-semibold text-stone-600 bg-stone-100 px-3 py-1 rounded-full">
                        {event.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-stone-900 mb-3 font-serif">{event.title}</h3>
                    
                    <p className="text-stone-700 mb-4 leading-relaxed"
                      style={{ fontFamily: 'KaiTi, serif' }}
                    >
                      {event.description}
                    </p>
                    
                    <p className="text-sm text-stone-600 font-medium">
                      <span className="mr-2">📍</span>{event.location}
                    </p>
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