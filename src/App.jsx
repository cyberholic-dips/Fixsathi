import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateProfile from './pages/CreateProfile'
import ProviderProfile from './pages/ProviderProfile'
import ProviderDashboard from './pages/ProviderDashboard'
import ProviderRatings from './pages/ProviderRatings'
import ProviderBookings from './pages/ProviderBookings'
import Login from './pages/Login'
import { AuthProvider } from './components/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

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
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<CreateProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/provider/:id" element={<ProviderProfile />} />

            {/* Protected Routes */}
            <Route path="/provider-dashboard" element={
              <ProtectedRoute>
                <ProviderDashboard />
              </ProtectedRoute>
            } />
            <Route path="/provider/ratings" element={
              <ProtectedRoute>
                <ProviderRatings />
              </ProtectedRoute>
            } />
            <Route path="/provider/bookings" element={
              <ProtectedRoute>
                <ProviderBookings />
              </ProtectedRoute>
            } />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  )
}

export default App
