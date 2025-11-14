import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import AlumniDirectoryPage from './pages/directory/AlumniDirectoryPage';
import EventManagementPage from './pages/events/EventManagementPage';
import ProfilePage from './pages/profile/ProfilePage';
import GraduatedStudentsPage from './pages/GraduatedStudentsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/directory" element={<AlumniDirectoryPage />} />
        <Route path="/events" element={<EventManagementPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/graduated-students" element={<GraduatedStudentsPage />} />
      </Routes>
    </div>
  );
}

export default App;