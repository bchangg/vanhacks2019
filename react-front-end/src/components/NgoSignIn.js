import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { navigate } from 'hookrouter'

const useStyles = makeStyles(theme => ({
  error: {
    color: "red",
    fontSize: "0.8rem",
  }
}));

export default function NgoSignIn(props) {
  const classes = useStyles();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState({
    email: '',
    password: ''
  });

  const validate = function() {
    if (!email) {
      setError(current => ({
        ...current,
        email: 'Email cannot be empty!'
      }))
    }
    if (!password) {
      setError(current => ({
        ...current,
        password: 'Please enter your password!'
      }))
    }
  }

  const login = function(event) {
    event.preventDefault();
    validate();
    console.log(email, password);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <p>NGO Sign-In</p>
      <form onSubmit={event => login(event)} className="d-flex flex-column align-items-center">
        <TextField
          error={email === ''}
          type="email"
          label="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <span className={classes.error}>{error.email}</span>
        <TextField
          error={password === ''}
          type="password"
          label="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <span className={classes.error}>{error.password}</span>
        <Button type="submit">Log In</Button>
      </form>
    </div>
  )
}