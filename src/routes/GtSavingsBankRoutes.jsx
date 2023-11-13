import { Routes, Navigate, Route } from 'react-router';
import CustomNavbar from '../components/navbar';

const GtSavingsBankRoutes = () => (
  <div className="app-container">
    <CustomNavbar />
    <div className="tabs-container">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  </div>
);

export default GtSavingsBankRoutes;
