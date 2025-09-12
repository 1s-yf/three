'use client';

import { useState, useEffect } from 'react';
import { families, FamilyData } from '@/data/families';
import { familyHistories } from '@/data/family-histories';
import FamilyNavigation from '@/components/family-navigation';
import FamilyTimeline from '@/components/family-timeline';
import BiographyNarrativeUpdated from '@/components/biography-narrative-updated';
import ImageGallery from '@/components/image-gallery';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import FamilyHeritage from '@/components/family-heritage';
import FamilyGrid from '@/components/family-grid';
import Gallery from '@/components/gallery';
import Videos from '@/components/videos';
import ClosingPage from '@/components/closing-page';
import Footer from '@/components/footer';
import FamilyNotes from '@/components/family-notes';
import FamilyMediaGallery from '@/components/family-media-gallery';

export default function Home() {
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [currentView, setCurrentView] = useState<'home' | 'family'>('home');

  // 首页皖南十姓家训体系
  const prominentFamilies = families.filter(f => 
    ['mei', 'hu', 'tao', 'zhu', 'wang', 'xu', 'huang', 'zhang', 'cheng', 'wang_s'].includes(f.id)
  );

  const currentFamily = families.find(f => f.id === selectedFamily) || families[0];

  useEffect(() => {
    if (selectedFamily !== null && selectedFamily !== families[0]?.id) {
      setIsLoading(true);
      setOpacity(0.3);
      
      // 300ms渐隐渐显动画
      setTimeout(() => {
        setOpacity(1);
        setIsLoading(false);
      }, 300);
    }
  }, [selectedFamily]);

  const handleFamilySelect = (familyId: string | null) => {
    if (familyId === null) {
      setCurrentView('home');
      setSelectedFamily(null);
    } else {
      setCurrentView('family');
      setSelectedFamily(familyId);
    }
  };

  // 首页视图
  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200">
        <Navigation onHomeClick={() => setCurrentView('home')} />
        <FamilyNavigation
          selectedFamily={selectedFamily}
          onFamilySelect={handleFamilySelect}
          prominentFamilies={prominentFamilies}
        />
        <main className="ml-60">
          {/* 1. 皖南家风展示馆页面 - Hero section */}
          <Hero onExploreClick={() => setCurrentView('family')} />
          
          {/* 2. 皖南十姓简介页面 - Family Grid section */}
          <FamilyGrid />
          
          {/* 3. 皖南十姓家风荟萃页面 - Family Heritage section */}
          <FamilyHeritage />
          
          {/* 4. 关于我们 - About section */}
          <About />
          
          {/* 5. 活动花絮 - Gallery section */}
          <Gallery />
          
          {/* 6. 视频回顾 - Videos section */}
          <Videos />
          
          {/* 7. 结束页面 */}
          <ClosingPage />
          
          <Footer />
        </main>
      </div>
    );
  }

  // 家族详情视图
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200">
      <Navigation onHomeClick={() => setCurrentView('home')} />
      
      <FamilyNavigation
        selectedFamily={selectedFamily}
        onFamilySelect={handleFamilySelect}
        prominentFamilies={prominentFamilies}
      />

      <main 
        className="ml-60 transition-opacity duration-300" 
        style={{ opacity }}
      >
        <div className="min-h-screen py-8 px-8 pt-24">
          <header className="text-center mb-12 pt-8"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.1), rgba(47, 79, 79, 0.1))',
              borderRadius: '1rem',
              padding: '2rem',
              marginBottom: '2rem'
            }}
          >
            <div className="mb-4">
              <span className="text-4xl mr-4">{currentFamily.emblem}</span>
            </div>
            <h1 className="text-4xl font-bold text-stone-800 mb-4 font-serif"
              style={{ color: currentFamily.color }}
            >
              {currentFamily.name}家族史馆
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'KaiTi, serif' }}
            >
              {currentFamily.description}
            </p>
          </header>

          {isLoading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-center"
                style={{
                  background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath fill=\'%23f5f5f5\' d=\'M10,50 Q30,10 50,50 T90,50 L90,90 L10,90 Z\'/%3E%3C/svg%3E") center no-repeat',
                  backgroundSize: '200px 200px',
                  width: '200px',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div className="text-stone-600"
                  style={{ marginTop: '120px', fontFamily: 'KaiTi, serif' }}
                >
                  宣纸展开中...
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              <section id="biography">
                <BiographyNarrativeUpdated
                  familyHistory={familyHistories[currentFamily.id] || {
                    家学渊源: '家学渊源内容丰富，传承有序',
                    家风传承: '家风传承特色鲜明，影响深远',
                    地理位置: '地理位置优越，文化底蕴深厚'
                  }}
                  familyColor={currentFamily.color}
                  familyName={currentFamily.name}
                />
              </section>

              <section id="timeline">
                <FamilyTimeline
                  members={currentFamily.members}
                  familyColor={currentFamily.color}
                />
              </section>

              <section id="media-gallery">
                <FamilyMediaGallery
                  familyId={currentFamily.id}
                  familyName={currentFamily.name}
                  familyColor={currentFamily.color}
                />
              </section>

            </div>
          )}

          <FamilyNotes 
            familyId={currentFamily.id} 
            familyName={currentFamily.name} 
            familyColor={currentFamily.color} 
          />
        </div>
      </main>
    </div>
  );
}