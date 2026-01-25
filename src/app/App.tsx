import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from '@/app/components/landing-page';
import { AdminPanel } from '@/app/components/admin-panel';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
