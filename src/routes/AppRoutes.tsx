import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from '../pages/Navbar';
import Loader from '../components/Loader';
import ErrorBoundary from '../components/ErrorBoundary';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));

export default function AppRoutes() {
  return (
    <>
    <Navbar />
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}
