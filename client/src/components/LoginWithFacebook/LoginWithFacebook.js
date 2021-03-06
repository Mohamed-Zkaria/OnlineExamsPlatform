import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import axios from '../../axios';
function LoginWithFacebook(props) {
  const responseFacebook = (response) => {
    if (!response.name || !response.email || !response.id) {
      props.methods.setError('Not all data fetched, please try again.');
    } else {
      axios
        .post('teacher/login', {
          email: response.email,
          loginMethod: 'facebook',
          facebookID: response.id,
          name: response.name,
        })
        .then((result) => {
          localStorage.setItem('teacherToken', result.data.token);
          props.history.push('/teacher');
        })
        .catch((err) => {
          console.log(err);
          props.methods.setError('invalid credentials');
        });
    }
  };

  return (
    <FacebookLogin
      appId='614250152549427'
      autoLoad={false}
      callback={responseFacebook}
      fields='name,email'
      render={(renderProps) => (
        <button
          type='button'
          onClick={renderProps.onClick}
          className='btn btn-block facebook-login text-white'
        >
          Login with <FontAwesomeIcon icon={faFacebook} />
        </button>
      )}
    />
  );
}

export default LoginWithFacebook;
