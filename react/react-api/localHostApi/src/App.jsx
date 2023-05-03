import { Routes, Route } from 'react-router-dom'
import ApiPage from './components/ApiPages/ApiPage.jsx'
import OtherPage from './components/OtherPages/OtherPage.jsx'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<ApiPage />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
    </div>
  )
}

export default App
