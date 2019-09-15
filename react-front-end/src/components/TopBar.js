import React from 'react';
import { AppBar, IconButton, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { navigate } from 'hookrouter'
import { makeStyles } from '@material-ui/core/styles'

export default function TopBar(props) {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center" style={{height: '3rem', padding: '0 1.5rem'}}>
      <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="logo" style={{maxWidth: '6rem'}}/>
      {
        props.signIn &&
        <Button onClick={() => navigate('/login')}>Sign In</Button>
      }
    </div>
  );
};