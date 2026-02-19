    // src/App.js
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
    import SignUp from './pages/SignUp';
    import SignIn from './pages/SignIn';
    import MainPage from './pages/MainPage';
    import StaffPerformancePredictor from './components/StaffPerformancePredictor';
    import './index.css'; // Ensure your Tailwind CSS file is imported

    function App() {
      // Basic auth check (replace with more robust logic)
      const isAuthenticated = () => {
        // Check if user data exists in local storage
        return localStorage.getItem('user') !== null;
      };

      return (
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            {/* Protected route for the main page */}
            <Route
              path="/main"
              element={isAuthenticated() ? <MainPage /> : <Navigate to="/signin" replace />}
            />
            {/* New protected route for Staff Evaluation */}
            <Route
              path="/staff-evaluation"
              element={isAuthenticated() ? <StaffPerformancePredictor /> : <Navigate to="/signin" replace />}
            />
            {/* Redirect to signin by default */}
            <Route path="*" element={<Navigate to="/signin" replace />} />
          </Routes>
        </Router>
      );
    }

    export default App;