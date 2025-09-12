'use client';

export default function ClosingPage() {
  return (
    <section id="closing" className="py-32 bg-gradient-to-br from-amber-50 via-stone-50 to-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-5xl font-bold text-stone-800 mb-6 font-serif">
            感谢观看
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
          
          <p className="text-xl text-stone-700 leading-relaxed max-w-2xl mx-auto mb-8">
            皖南十姓，千年传承，家风家训，代代相传。我们希望通过本次展示，
            让更多人了解皖南地区深厚的文化底蕴和独特的家风传统。
          </p>
          
          <p className="text-2xl text-stone-800 font-medium mb-12 font-serif">
            如有不足，敬请指正
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2 font-serif">文化传承</h3>
            <p className="text-stone-600">传承千年家风家训</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2 font-serif">精神弘扬</h3>
            <p className="text-stone-600">弘扬中华优秀传统文化</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2 font-serif">共同建设</h3>
            <p className="text-stone-600">共建社会主义精神文明</p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-2xl shadow-xl border border-stone-200">
          <div className="text-center">
            <p className="text-lg text-stone-700 mb-4">
              <em className="font-serif">"家风正则民风淳，民风淳则社稷安"</em>
            </p>            
            <p className="text-sm text-stone-600">
              让我们携手传承优秀传统文化，共同建设美好家园
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}