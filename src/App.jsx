import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkoutsPage from './pages/WorkoutsPage';
import TrainersPage from './pages/TrainersPage';
import NewsPage from './pages/NewsPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/workouts" element={<WorkoutsPage />} />
                  <Route path="/trainers" element={<TrainersPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </AnimatePresence>
            </div>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
