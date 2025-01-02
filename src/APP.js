import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import News from './components/News';
import Publications from './components/Publications';

const App = () => {
  return (
    <Router>
      <div className="max-w-4xl mx-auto p-4">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </div>
    </Router>
  );
};