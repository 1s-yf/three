'use client';

interface BiographyNarrativeProps {
  familyName: string;
  familyHistory: {
    家学渊源: string;
    家风传承: string;
    地理位置: string;
  };
  familyColor: string;
}

export default function BiographyNarrativeUpdated({ familyName, familyHistory, familyColor }: BiographyNarrativeProps) {
  const sections = [
    { title: '家学渊源', content: familyHistory.家学渊源, icon: '📚' },
    { title: '家风传承', content: familyHistory.家风传承, icon: '🏛️' },
    { title: '地理位置', content: familyHistory.地理位置, icon: '🗺️' },
  ];

  return (
    <section className="py-12 bg-white rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4 font-serif">
            家族历程
          </h2>
          <p className="text-stone-600 text-lg">
            {familyName}家族的千年传承脉络
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {sections.map((section, index) => (
            <article key={index} className="bg-gradient-to-br from-stone-50 to-white p-8 rounded-lg border border-stone-200 shadow-sm">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{section.icon}</span>
                <h3 className="text-2xl font-bold text-stone-800 font-serif">{section.title}</h3>
                <div className="ml-4 w-12 h-0.5" style={{ backgroundColor: familyColor }}></div>
              </div>
              
              <div className="text-stone-700 leading-relaxed text-lg space-y-3" style={{ fontFamily: 'KaiTi, serif', lineHeight: '1.8' }}>
                {section.content.split('\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-3" style={{ textIndent: '2em' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}