import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/landing-page';
import '@/lib/production-optimizations';

// Lazy load admin panel since it's not needed on initial page load
const AdminPanel = lazy(() => import('./components/admin-panel').then(m => ({ default: m.AdminPanel })));

// Simple loading fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/admin" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <AdminPanel />
            </Suspense>
          } 
        />
      </Routes>
    </Router>
  );
}