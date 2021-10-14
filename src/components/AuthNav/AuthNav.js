import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonGroup, Button } from '@material-ui/core';

export default function AuthNav() {
  return (
    <ButtonGroup
      variant="text"
      color="primary"
      aria-label="text primary button group"
    >
      <NavLink to="/register">
        <Button color="primary">Register</Button>
      </NavLink>

      <NavLink to="/login">
        <Button color="primary">Login</Button>
      </NavLink>
    </ButtonGroup>
  );
}
