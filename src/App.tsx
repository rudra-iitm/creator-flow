import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/Homepage';
import { UploadProject } from './pages/UploadProject';
import { Review } from './pages/Review';
import { CreatorDashboard } from './pages/CreatorDashboard';
import { Editors } from './pages/Editors';
import { Projects } from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadProject />} />
        <Route path="/review" element={<Review />} />
        <Route path="/creator-dashboard" element={<CreatorDashboard />} />
        <Route path="/editors" element={<Editors />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
