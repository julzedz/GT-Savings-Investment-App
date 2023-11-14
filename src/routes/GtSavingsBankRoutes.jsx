import { Routes, Navigate, Route } from 'react-router';
import CustomNavbar from '../components/navbar';
import Home from '../components/home';
import Banking from '../components/banking';
import Investment from '../components/investment';
import Support from '../components/support';
import Profile from '../components/profile';
import Account from '../components/account';

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
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  </div>
);

export default GtSavingsBankRoutes;
