import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <div>
      <NavLink to="/contacts">
        <Button variant={isLoggedIn ? 'contained' : 'disabled'} color="primary">
          Contacts
        </Button>
      </NavLink>
    </div>
  );
}
