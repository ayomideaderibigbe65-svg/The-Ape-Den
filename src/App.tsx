import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CollectionPage } from './pages/CollectionPage';
import { MintPage } from './pages/MintPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { FAQPage } from './pages/FAQPage';
import { NotFound } from './components/NotFound';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const isKnownRoute = ['/', '', '/collection', '/mint', '/roadmap', '/faq'].includes(currentPath);

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
      case '':
        return <Home onNavigate={navigate} />;
      case '/collection':
        return <CollectionPage />;
      case '/mint':
        return <MintPage />;
      case '/roadmap':
        return <RoadmapPage />;
      case '/faq':
        return <FAQPage />;
      default:
        return <NotFound onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-lime selection:text-black font-sans antialiased flex flex-col justify-between">
      {isKnownRoute && <Navbar currentPath={currentPath} onNavigate={navigate} />}
      
      <main className="flex-1 transition-opacity duration-200" key={currentPath}>
        {renderCurrentPage()}
      </main>

      {isKnownRoute && <Footer onNavigate={navigate} />}
    </div>
  );
};

export default App;
