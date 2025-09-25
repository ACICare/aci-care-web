import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Pages
import Hero from './pages/Hero';
import About from './pages/About';
import Project from './pages/Project';
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';

// Components
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

function AppRoutes() {
  const { currentUser } = useAuth();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><About /><Project /></>} />
        <Route path="/login" element={currentUser ? <Navigate to="/settings" /> : <Login />} />
        <Route path="/register" element={currentUser ? <Navigate to="/settings" /> : <Register />} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
