import { Routes, Route } from 'react-router';
import CustomNavbar from '../components/navbar';

const GtSavingsBankRoutes = () => (
  <div className="app-container">
    <CustomNavbar />
    <div className="tabs-container">
      <Routes>
        <Route path="/home" />
      </Routes>
    </div>
  </div>
);

export default GtSavingsBankRoutes;
