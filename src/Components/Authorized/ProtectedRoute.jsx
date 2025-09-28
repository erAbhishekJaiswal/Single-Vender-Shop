import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import '../../ComponentsCSS/ProtectedRoute.css';

const ProtectedRoute = ({ children, isAuthenticated, redirectTo = "/login" }) => {
    const location = useLocation();

    if (!isAuthenticated) {
        return (
            <div className="protected-route-container">
                <div className="protected-route-content">
                    <div className="protected-route-icon">🔒</div>
                    <h2 className="protected-route-title">Authentication Required</h2>
                    <p className="protected-route-message">
                        Please log in to access this page.
                    </p>
                    <button 
                        className="protected-route-button"
                        onClick={() => window.location.href = redirectTo}
                    >
                        Login Now
                    </button>
                </div>
            </div>
        );
    }

    return children;
};

export default ProtectedRoute;