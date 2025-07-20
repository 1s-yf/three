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
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Videos />
      <Timeline />
      <Reflections />
      <Contact />
      <Footer />
    </main>
  );
}