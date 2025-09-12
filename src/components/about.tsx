export default function About() {
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
                <span><strong>新闻投稿：</strong>完成多篇新闻稿件投稿，展示实践团队调研成果与文化传播成效</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-stone-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span><strong>家风荟萃：</strong>完成10篇家风荟萃文章，深度挖掘皖南地区优秀家风文化</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-stone-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span><strong>家风札记：</strong>撰写30篇家风札记，记录调研过程中的文化感悟与思考</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-stone-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span><strong>调研报告：</strong>完成皖南家风文化调研报告，为乡村振兴提供文化支撑建议</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-stone-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span><strong>视频制作：</strong>完成总体实践视频1部、王稼祥专题视频1部，展现实践历程</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-stone-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span><strong>结项报告：</strong>完成三下乡社会实践结项报告，总结活动经验与成果</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}