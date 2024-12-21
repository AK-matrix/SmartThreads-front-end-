// src/components/AuthStatus.js
import React from 'react';
import { useSelector } from 'react-redux';

function AuthStatus() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <p>You are logged in!</p>
      ) : (
        <p>You are not logged in. Please log in to access protected features.</p>
      )}
    </div>
  );
}

export default AuthStatus;
