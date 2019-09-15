import React, { Fragment, useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from 'hookrouter';
import axios from 'axios';
import TopBar from "./TopBar"

const useStyles = makeStyles(theme => ({
  error: {
    color: "red",
    fontSize: "0.8rem",
  },
  root: {
    marginTop: '7rem'
  },
  login: {
    border: 0,
    borderRadius: '5px',
    color: 'white',
    backgroundColor: 'green',
  },
  textBox: {
    border: 1,
    borderColor: 'black'
  }
}));

export default function NgoSignIn(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      return false;
    } else {
      setError(current => ({
        ...current,
        email: ''
      }));
    }
    if (!password) {
      setError(current => ({
        ...current,
        password: 'Please enter your password!'
      }))
      return false;
    } else {
      setError(current => ({
        ...current,
        password: ''
      }));
    }
    return true;
  }

  const login = function(event) {
    event.preventDefault();
    if (validate()) {
      axios.post('/users', { email, password })
        .then((response) => {
          console.log('inside axios post to login');
          console.log(response);
        })
        .catch(() => {
          navigate('/login');
        });
    }
  };

  return (
    <Fragment>
      <TopBar />
      <div className={classes.root}>
        <form onSubmit={event => login(event)} className="d-flex flex-column align-items-center">
          <TextField
            className={classes.textBox}
            error={email === undefined}
            type="email"
            label="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <span className={classes.error}>{error.email}</span>
          <TextField
            className={classes.textBox}
            error={password === undefined}
            type="password"
            label="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <span className={classes.error}>{error.password}</span>
          <br/>
          <Button className={classes.login} variant="outlined" type="submit">Log In</Button>
        </form>
      </div>
    </Fragment>
  )
}