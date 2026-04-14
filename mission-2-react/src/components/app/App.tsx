import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/home/HomePage';
import HistoryPage from '../../pages/history/HistoryPage';
import AboutPage from '../../pages/about/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
