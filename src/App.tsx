// src/App.js
import React from 'react';
import Login from './Components/Login.tsx';
import Logout from './Components/Logout.tsx';
import ProtectedData from './Components/ProtectedData.tsx';
import AuthStatus from './Components/AuthStatus.js';

function App() {
  return (
    <div>
      <AuthStatus />
      <Login />
      <Logout />
      <ProtectedData />
    </div>
  );
}

export default App;
