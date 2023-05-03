import './App.css';
import HomePage from './components/Home/HomePage';
import ByMe from './components/ByMe'
import GalleryPage from './components/Gallery/GalleryPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
        <ByMe />
    </div>
  );
}

export default App;
