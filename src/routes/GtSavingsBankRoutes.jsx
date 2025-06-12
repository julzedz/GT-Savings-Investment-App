import { Routes, Navigate, Route, useLocation } from 'react-router';
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
import EditUser from '../components/edituser';
import Signup from '../components/signup';
import Deposit from '../components/deposit';
import Withdrawal from '../components/withdrawal';
import Withdrawalsavings from '../components/withdrawal-savings';
import ContactForm from '../components/contactform';
import InvestDeposit from '../components/invest-deposit';
import InvAccForm from '../components/invest-acc-form';
import ProtectedRoute from './ProtectedRoute';
import OTPInput from '../components/OTPInput';
import UserDetails from '../components/admin/UserDetails';
import Receipt from '../components/Receipt';
import InternationalWire from '../components/InternationalWire';

const GtSavingsBankRoutes = () => {
  const location = useLocation();
  const showNavbar = [
    '/home',
    '/banking',
    '/about',
    '/contactform',
    '/investmentplans',
    '/insurance',
  ].includes(location.pathname);
  const showFooter = [
    '/home',
    '/banking',
    '/about',
    '/contactform',
    '/investmentplans',
    '/insurance',
  ].includes(location.pathname);

  return (
    <>
      <div className="app-container">
        {showNavbar && <Navbar />}
        <div className="tabs-container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/banking"
              element={<ProtectedRoute element={<Banking />} />}
            />
            <Route
              path="/investment"
              element={<ProtectedRoute element={<Investment />} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/profile"
              element={<ProtectedRoute element={<Profile />} />}
            />
            <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
            <Route
              path="/insurance"
              element={<ProtectedRoute element={<Insurance />} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-otp" element={<OTPInput />} />
            <Route
              path="/transaction"
              element={<ProtectedRoute element={<Transaction />} />}
            />
            <Route path="/investmentplans" element={<InvestmentPlans />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/deposit"
              element={<ProtectedRoute element={<Deposit />} />}
            />
            <Route
              path="/withdrawal"
              element={<ProtectedRoute element={<Withdrawal />} />}
            />
            <Route
              path="withdrawal-savings"
              element={<ProtectedRoute element={<Withdrawalsavings />} />}
            />
            <Route path="/contactform" element={<ContactForm />} />
            <Route
              path="/invest-deposit"
              element={<ProtectedRoute element={<InvestDeposit />} />}
            />
            <Route
              path="/invaccform"
              element={<ProtectedRoute element={<InvAccForm />} />}
            />
            <Route path="/edituser" element={<EditUser />} />
            <Route
              path="/receipt"
              element={<ProtectedRoute element={<Receipt />} />}
            />
            <Route
              path="/user/:userId"
              element={<ProtectedRoute element={<UserDetails />} />}
            />
            <Route
              path="/internationalwire"
              element={<ProtectedRoute element={<InternationalWire />} />}
            />
          </Routes>
        </div>
        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default GtSavingsBankRoutes;
