import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import NavLayout from './components/NavLayout.js';
import Portfolio from './components/portfolio.js';
import Image from './components/ImageGallery';
import Projects from './components/Project.js';
import Profile from './components/Profile.js';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
        <Route index element={<NavLayout />} /> 
        <Route path="ImageGallery" element={<Image />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Portfolio" element={< Portfolio />} />
        <Route path="Profile" element={< Profile />} />
        </Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;