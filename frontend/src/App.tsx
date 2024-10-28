import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CampaignManager from './components/campaign-manager'
import RevenueInsights from './components/revenue-insights'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/landing-page'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <div className='w-[99vw] h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/campaigns' element={<CampaignManager />} />
          <Route path='/analytics' element={<RevenueInsights />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
}

export default App
