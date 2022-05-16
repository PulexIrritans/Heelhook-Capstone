import React from 'react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const { signup } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <>
      <h1>Sign Up</h1>
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
        <div>
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            minLength="8"
            required
            ref={passwordConfirmRef}
          />
        </div>
        <button disabled={loading}>Sign up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </>
  );
};

export default Signup;
