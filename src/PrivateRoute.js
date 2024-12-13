import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = true/* your authentication check logic here */

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  return children; // Render the protected component (e.g., DashboardPage)
}

export default PrivateRoute;
