import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Services from './components/Services';
import Projects from './components/Projects';
import ProgressDashboard from './components/ProgressDashboard';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SiteVisitModal from './components/SiteVisitModal';
import Testimonials from './components/Testimonials';
import FoundersMessage from './components/FoundersMessage';
import VideoGallery from './components/VideoGallery';
import OfficeMap from './components/OfficeMap';
// import Blog from './components/Blog';
import Gallery from './components/Gallery';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const renderContent = () => {
    // if (currentPath === '/blog') {
    //   return <Blog />;
    // }
    // if (currentPath.startsWith('/blog/')) {
    //   const blogId = currentPath.substring(6);
    //   return <Blog blogId={blogId} />;
    // }
    if (currentPath === '/gallery') {
      return <Gallery />;
    }

    switch (currentPath) {
      case '/':
      case '/home':
        return (
          <>
            <Hero />
            <Projects />
            <VideoGallery />
            <FoundersMessage />
            <Testimonials />
            <OfficeMap />
          </>
        );
      case '/about':
        return <FoundersMessage isPage={true} />;
      // case '/services':
      // case '/servise':
      //   return <Services />;
      case '/projects':
        return (
          <>
            <Projects isPage={true} />
            <ProgressDashboard />
          </>
        );
      case '/contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Projects />
            <VideoGallery />
            <FoundersMessage />
            <Testimonials />
            <OfficeMap />
          </>
        );
    }
  };

  return (
    <>
      <Navbar currentPath={currentPath} />
      <main className="min-h-[70vh]">
        {renderContent()}
      </main>
      <Footer />
      <SiteVisitModal />
    </>
  );
}

export default App;
