export default function About() {
  const teamMembers = [
    { name: '张文博', role: '队长', avatar: '/api/placeholder/150/150' },
    { name: '李雅轩', role: '副队长', avatar: '/api/placeholder/150/150' },
    { name: '王诗涵', role: '文化组长', avatar: '/api/placeholder/150/150' },
    { name: '陈致远', role: '调研组长', avatar: '/api/placeholder/150/150' },
    { name: '刘雨桐', role: '记录组长', avatar: '/api/placeholder/150/150' },
    { name: '赵梓萱', role: '宣传组长', avatar: '/api/placeholder/150/150' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-stone-900 mb-6 font-serif">关于我们</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-stone-600 to-stone-400 mx-auto mb-8"></div>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed font-light">
            合肥工业大学宣城校区三下乡社会实践团队，致力于皖南地区家风文化传承与弘扬，
            通过深入调研、文化展示、教育推广等多种形式，助力乡村振兴与文化繁荣。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-stone-900 mb-6 font-serif">项目简介</h3>
            <div className="space-y-6 text-stone-700 leading-relaxed"
              style={{ fontFamily: 'KaiTi, serif' }}
            >
              <p className="text-lg">
                本次三下乡社会实践以传承家风文化，助力乡村振兴为主题，
                深入皖南地区开展为期两周的实地调研与文化传承活动。
              </p>
              <p>
                团队聚焦皖南地区深厚的家风文化底蕴，通过走访调研、文化展示、教育推广等形式，
                挖掘整理当地优秀家风故事，传承弘扬中华传统美德。
              </p>
              <p>
                在实践中感悟文化魅力，在服务中彰显青春担当，
                为新时代乡村振兴贡献青年力量与智慧。
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-stone-100 to-stone-200 p-10 rounded-lg border border-stone-300">
            <h4 className="text-2xl font-bold text-stone-900 mb-8 font-serif">活动成果</h4>
            <ul className="space-y-4 text-stone-800">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-stone-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>深入调研8个传统村落，收集家风故事200余篇</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-stone-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>举办家风文化展览12场，吸引观众1500余人次</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-stone-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>开展传统文化教育课程20课时，惠及学生300余人</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-stone-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>完成调研报告3篇，为乡村振兴提供文化建议</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-center text-stone-900 mb-12 font-serif">实践团队</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-stone-400 shadow-lg">
                  <span className="text-stone-600 text-sm font-medium">{member.name.slice(0, 1)}</span>
                </div>
                <h4 className="font-bold text-stone-900 mb-1">{member.name}</h4>
                <p className="text-stone-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}