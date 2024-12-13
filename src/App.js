import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import PrivateRoute from './PrivateRoute'; // Assuming you will update PrivateRoute accordingly

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Private Route */}
        {/* You would need to modify PrivateRoute to be compatible with React Router v6 */}
        <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />

        {/* Default Route (Home Page) */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
