export default function About() {
  const teamMembers = [
    { name: '张同学', role: '队长', avatar: '/api/placeholder/150/150' },
    { name: '李同学', role: '副队长', avatar: '/api/placeholder/150/150' },
    { name: '王同学', role: '宣传组长', avatar: '/api/placeholder/150/150' },
    { name: '陈同学', role: '后勤组长', avatar: '/api/placeholder/150/150' },
    { name: '刘同学', role: '医疗组长', avatar: '/api/placeholder/150/150' },
    { name: '赵同学', role: '调研组长', avatar: '/api/placeholder/150/150' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们是一支由大学生组成的志愿服务团队，致力于通过三下乡活动深入基层，
            为农村地区提供教育、医疗、文化等多方面的支持与帮助。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">项目简介</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                本次&quot;三下乡&quot;活动以&quot;青春建功新时代，乡村振兴我先行&quot;为主题，
                组织大学生志愿者深入农村基层，开展为期两周的志愿服务。
              </p>
              <p>
                活动内容包括：教育帮扶、医疗义诊、文化宣传、科技普及、
                产业调研等多个方面，旨在为乡村振兴贡献青春力量。
              </p>
              <p>
                通过实践活动，志愿者们不仅服务了当地群众，也在实践中增长了才干，
                增强了社会责任感和历史使命感。
              </p>
            </div>
          </div>
          
          <div className="bg-red-50 p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-red-900 mb-4">活动成果</h4>
            <ul className="space-y-3 text-red-800">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                服务村民500余人次
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                开展义诊活动8场
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                举办文化晚会3场
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                完成调研报告5篇
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">团队成员</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">头像</span>
                </div>
                <h4 className="font-bold text-gray-900">{member.name}</h4>
                <p className="text-red-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}