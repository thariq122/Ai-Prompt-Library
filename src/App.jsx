import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Submit from './pages/submit';
import Favorites from './pages/favorites';
import About from './pages/about';
import AllPrompt from './pages/allprompt';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import PageTransition from './components/PageTransition';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background">
      <Navbar />
      <main className="flex-grow">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/allprompt" element={<AllPrompt />} />
          </Routes>
        </PageTransition>
      </main>
      <BottomNav />
    </div>
  );
}

export default App;