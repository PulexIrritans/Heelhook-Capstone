import React from 'react';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';
import Button from '../Button';

const Signup = () => {
  const { signup } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();

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
      navigate('/');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <Wrapper>
      <h1>Sign Up</h1>
      {error && <p>{error}</p>}
      <FormWrapper
        onSubmit={event => {
          handleSubmit(event);
        }}
      >
        <label htmlFor="email">Email</label>
        <Input type="email" id="email" name="email" required ref={emailRef} />
        <label htmlFor="password">Password (8 characters minimum)</label>
        <Input
          type="password"
          id="password"
          name="password"
          minLength="8"
          required
          ref={passwordRef}
        />
        <label htmlFor="passwordConfirm">Password Confirmation</label>
        <Input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          minLength="8"
          required
          ref={passwordConfirmRef}
        />
        <Button title={'Sign up'} disabled={loading} />
      </FormWrapper>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 1rem 1rem;
  margin-top: 1rem;
  width: 95%;
  max-width: 768px;
  background-color: var(--color-cyan-transparent);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const Input = styled.input`
  height: 3rem;
  border: 1px solid var(--border-color);
  padding: 1rem;
`;
