import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { ProjectsPage } from './projects/ProjectsPage';
import { AboutPage } from './about/AboutPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
