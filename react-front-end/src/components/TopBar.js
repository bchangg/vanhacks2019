import React from 'react';
import { navigate } from 'hookrouter';
import { Button } from '@material-ui/core';
import { useCookies } from 'react-cookie';

export default function TopBar(props) {
  const [cookies, removeCookie] = useCookies(['user']);
  const logout = function() {
    removeCookie(['user']);
    navigate('/login');
  }
  return (
    <div className="d-flex flex-row justify-content-between align-items-center" style={{height: '3rem', padding: '0 1.5rem'}}>
      <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="logo" style={{maxWidth: '6rem'}}/>
      {
        props.login &&
        <Button onClick={() => navigate('/login')}>Sign In</Button>
      }
      {
        props.logout &&
        <Button onClick={() => logout()}>Sign out</Button>
      }
    </div>
  );
};