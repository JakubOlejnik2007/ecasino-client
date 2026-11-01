import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import RequireAuth from './components/RequireAuth'
import keycloak from './auth/keycloak'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/dashboard">Dashboard</Link>
        {' | '}

        {keycloak.authenticated ? (
          <button onClick={() => keycloak.logout()}>
            Logout
          </button>
        ) : (
          <button onClick={() => keycloak.login()}>
            Login
          </button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}