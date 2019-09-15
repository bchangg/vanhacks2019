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
    <div className="sg-top-bar d-flex flex-row justify-content-between align-items-center">
      <a href="/"><img src="/assets/images/logo.png" alt="logo" style={{maxWidth: '9rem'}}/></a>
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