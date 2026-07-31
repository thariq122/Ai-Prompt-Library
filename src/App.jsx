import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Submit from './pages/submit';
import Favorites from './pages/favorites';
import About from './pages/about';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submit" element={<Submit />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;