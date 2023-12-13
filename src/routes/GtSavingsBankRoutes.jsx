import {
  Routes, Navigate, Route, useLocation,
} from 'react-router';
import Navbar from '../components/navbar';
import Home from '../components/home';
import Banking from '../components/banking';
import Investment from '../components/investment';
import Support from '../components/support';
import Profile from '../components/profile';
import Account from '../components/account';
import Insurance from '../components/insurance';
import Login from '../components/login';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

const GtSavingsBankRoutes = () => {
  const location = useLocation();
  const showNavbar = ['/home', '/banking', '/investment', '/support', '/insurance', '/login'].includes(location.pathname);
  const showSidebar = ['/account', '/profile', '/investment', '/transactions', '/settings'].includes(location.pathname);

  return (
    <>
      <div className="app-container">
        <Navbar />
        ||
        <Sidebar />
        <div className="tabs-container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/support" element={<Support />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<Account />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GtSavingsBankRoutes;
