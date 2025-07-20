'use client';

const timelineEvents = [
  {
    date: '2024-07-01',
    title: '出发动员大会',
    description: '在学校举行出发动员大会，明确活动目标和任务分工。',
    location: '学校礼堂',
  },
  {
    date: '2024-07-03',
    title: '抵达目的地',
    description: '经过长途跋涉，团队安全抵达目的地，与当地村委会对接。',
    location: 'XX村村委会',
  },
  {
    date: '2024-07-05',
    title: '支教活动启动',
    description: '为当地儿童开展英语、美术、音乐等课程教学。',
    location: '村小学',
  },
  {
    date: '2024-07-08',
    title: '医疗义诊服务',
    description: '组织医疗小分队为村民提供免费体检和健康咨询服务。',
    location: '村卫生室',
  },
  {
    date: '2024-07-10',
    title: '农业技术推广',
    description: '向当地农户推广现代农业技术，提高农业生产效率。',
    location: '村文化广场',
  },
  {
    date: '2024-07-12',
    title: '文艺晚会举办',
    description: '与当地村民共同举办文艺晚会，丰富农村文化生活。',
    location: '村文化广场',
  },
  {
    date: '2024-07-14',
    title: '调研成果汇报',
    description: '向村委会汇报调研成果，为当地发展提供建议。',
    location: '村委会会议室',
  },
  {
    date: '2024-07-15',
    title: '活动总结返程',
    description: '完成全部活动任务，举行总结大会后返程。',
    location: '村委会',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">时间轴</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            按时间顺序展示活动的重要节点和精彩瞬间
          </p>
        </div>

        <div className="relative">
          {/* 中心线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-center">
                {/* 时间点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* 内容 */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'ml-auto pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-2">
                      {index % 2 === 0 ? (
                        <>
                          <span className="text-sm font-semibold text-red-600 mr-2">{event.date}</span>
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                          <span className="text-sm font-semibold text-red-600">{event.date}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    <p className="text-sm text-red-600 font-medium">📍 {event.location}</p>
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