import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import auth from '../../redux/auth/auth-operation';
import { Avatar, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth.currentUser());
  }, [dispatch]);
  return (
    <div className={styles.cont}>
      <Avatar alt="avatar" color="primary">
        <AccountCircle style={{ fontSize: 50 }} color="primary" />
      </Avatar>
      <p className={styles.email}>{user?.name}</p>
      <Button
        onClick={() => dispatch(auth.logout())}
        variant="contained"
        color="primary"
        size="small"
      >
        Log out
      </Button>
    </div>
  );
}
