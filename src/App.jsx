import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Navigation from './common/Navigation/Navigation';
import Footer from './common/Footer/Footer';

// Lazy loading
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const NotFound = lazy(() => import('./pages/404/NotFound'));

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
