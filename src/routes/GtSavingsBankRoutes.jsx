import {
  Routes, Navigate, Route, useLocation,
} from 'react-router';
import Navbar from '../components/navbar';
import Home from '../components/home';
import Banking from '../components/banking';
import Investment from '../components/investment';
import About from '../components/about';
import Profile from '../components/profile';
import Dashboard from '../components/dashboard';
import Insurance from '../components/insurance';
import Login from '../components/login';
import Footer from '../components/footer';
import Transaction from '../components/transaction';
import InvestmentPlans from '../components/investmentplans';
import Signup from '../components/signup';
import Deposit from '../components/deposit';
import Withdrawal from '../components/withdrawal';
import ContactForm from '../components/contactform';

const GtSavingsBankRoutes = () => {
  const location = useLocation();
  const showNavbar = ['/home', '/banking', '/about', '/contactform', '/investmentplans', '/insurance'].includes(location.pathname);
  const showFooter = ['/home', '/banking', '/about', '/contactform', '/investmentplans', '/insurance'].includes(location.pathname);

  return (
    <>
      <div className="app-container">
        {showNavbar && <Navbar />}
        <div className="tabs-container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/login" element={<Login />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/investmentplans" element={<InvestmentPlans />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="/contactform" element={<ContactForm />} />
          </Routes>
        </div>
        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default GtSavingsBankRoutes;
