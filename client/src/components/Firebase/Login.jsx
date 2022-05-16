import React from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }

  return (
    <>
      <h1>Log In</h1>
      {error && <p>{error}</p>}
      <form
        onSubmit={event => {
          handleSubmit(event);
        }}
      >
        <div>
          <label htmlFor="email">Enter your email:</label>
          <input type="email" id="email" name="email" required ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password (8 characters minimum):</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength="8"
            required
            ref={passwordRef}
          />
        </div>
        <button disabled={loading}>Log in</button>
      </form>
      <p>
        Need an account? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
};

export default Login;
