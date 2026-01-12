import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateProfile from './pages/CreateProfile'
import ProviderProfile from './pages/ProviderProfile'

// Layout wrapper to include Navbar
const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-light)', fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} Fixsathi. Trust-focused local support.
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<CreateProfile />} />
          <Route path="/provider/:id" element={<ProviderProfile />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
