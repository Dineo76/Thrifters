import React, { useState } from 'react';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <Login onLogin={(user) => console.log('Logged in:', user.email)} />
          <p>
            Don’t have an account?{' '}
            <button onClick={() => setShowLogin(false)}>Register</button>
          </p>
        </>
      ) : (
        <>
          <Register onRegister={(user) => console.log('Registered:', user.email)} />
          <p>
            Already have an account?{' '}
            <button onClick={() => setShowLogin(true)}>Login</button>
          </p>
        </>
      )}
    </div>
  );
}

export default App;
