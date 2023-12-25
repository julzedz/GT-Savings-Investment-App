import {
  Routes, Navigate, Route, useLocation,
} from 'react-router';
import Navbar from '../components/navbar';
import Home from '../components/home';
import Banking from '../components/banking';
import Investment from '../components/investment';
import Support from '../components/support';
import Profile from '../components/profile';
import Dashboard from '../components/dashboard';
import Insurance from '../components/insurance';
import Login from '../components/login';
import Footer from '../components/footer';
import Transaction from '../components/transaction';
import InvestmentPlans from '../components/investmentplans';

const GtSavingsBankRoutes = () => {
  const location = useLocation();
  const showNavbar = ['/home', '/banking', 'investmentplans', '/support', '/insurance', '/login'].includes(location.pathname);
  // const showSidebar = [
  //   '/account', '/profile', '/investment', '/transactions', '/settings'
  // ].includes(location.pathname);
  const showFooter = ['/home', '/banking', '/support', '/insurance', '/login'].includes(location.pathname);

  return (
    <>
      <div className="app-container">
        {showNavbar && <Navbar />}
        {/* {showSidebar && <Sidebar />} */}
        <div className="tabs-container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/support" element={<Support />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/login" element={<Login />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/investmentplans" element={<InvestmentPlans />} />
          </Routes>
        </div>
        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default GtSavingsBankRoutes;
