import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import auth from '../../redux/auth/auth-operation';
import { TextField, Button } from '@material-ui/core';
import styles from './Register.module.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.type === 'text') {
      setName(e.target.value);
      return;
    }
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

    dispatch(auth.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      className={styles.registerForm}
    >
      <TextField
        onChange={handleChange}
        required
        id="standard-required"
        label="Name"
        type="name"
      />
      <TextField
        onChange={handleChange}
        required
        id="standard-required"
        label="Email"
        type="email"
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
