'use client';

import { useState, useEffect } from 'react';
import { families, FamilyData } from '@/data/families';
import FamilyNavigation from '@/components/family-navigation';
import FamilyTimeline from '@/components/family-timeline';
import BiographyNarrative from '@/components/biography-narrative';
import ImageGallery from '@/components/image-gallery';
import ResearchArticles from '@/components/research-articles';
import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/about';
import Gallery from '@/components/gallery';
import Videos from '@/components/videos';
import Timeline from '@/components/timeline';
import Reflections from '@/components/reflections';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [currentView, setCurrentView] = useState<'home' | 'family'>('home');

  // 首页六大皖南名门家训体系
  const prominentFamilies = families.filter(f => 
    ['mei', 'qian', 'tao', 'hu', 'zha', 'placeholder'].includes(f.id)
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
        <main className="ml-16">
          <Hero onExploreClick={() => setCurrentView('family')} />
          <About />
          <Gallery />
          <Videos />
          <Timeline />
          <Reflections />
          <Contact />
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
        className="ml-16 transition-opacity duration-300" 
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
                <BiographyNarrative
                  biography={currentFamily.biography}
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

              <section id="gallery">
                <ImageGallery
                  gallery={currentFamily.gallery}
                  familyColor={currentFamily.color}
                />
              </section>

              <section id="articles">
                <ResearchArticles
                  articles={currentFamily.articles}
                  familyColor={currentFamily.color}
                />
              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}