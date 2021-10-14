import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import auth from '../../redux/auth/auth-operation';
import { TextField, Button } from '@material-ui/core';
import styles from './Login.module.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    console.log(e.target.type);
    if (e.target.type === 'email') {
      setEmail(e.target.value);
      return;
    }

    if (e.target.type === 'password') {
      setPassword(e.target.value);
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(auth.login({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      style={{ width: 300, display: 'flex', flexDirection: 'column' }}
    >
      <TextField
        onChange={handleChange}
        required
        id="standard-required"
        label="Email"
        type="email"
        helperText="Enter your email"
      />
      <TextField
        onChange={handleChange}
        required
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <button className={styles.submitForm} type="submit">
        <Button variant="contained" color="primary" size="small">
          Submit
        </Button>
      </button>
    </form>
  );
}
