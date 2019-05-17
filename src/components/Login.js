import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { CometChat } from '@cometchat-pro/chat';
import config from '../config';

const Login = props => {

  const [uidValue, setUidValue] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [tabState, setTabState] = useState('login');

  // const signupUser = () => {

  // }

  const loginUser = event => {
    event.preventDefault();
    // 正在发送
    setIsSubmitting(true);
    // 登录
    CometChat.login(uidValue, config.apiKey).then(
      User => {
        NotificationManager.success('You are now logged in', 'Login Success');
        console.log('Login Successful:', { User });
        props.setUser(User);
      },
      error => {
        NotificationManager.error('Please try again', 'Login Failed');
        console.log('Login failed with exception:', { error });
        setIsSubmitting(false);
      }
    );
  };

  return (
    <div className='row'>
      <div className='col-md-6 login-form mx-auto'>
        <div
          className='tab left-tab'
          onClick={() => setTabState('login')}
        >
          Login
        </div>
        <div
          className='tab right-tab'
          onClick={() => setTabState('signup')}
        >
          Signup
        </div>
        <h3
          style={{
            marginTop: '20px'
          }}
        >
          Login to Awesome Chat
        </h3>
        <form className='mt-5' onSubmit={loginUser}>
          <div className='form-group'>
            <input
              type='text'
              name='username'
              className='form-control'
              placeholder='Your Username'
              value={uidValue}
              onChange={event => setUidValue(event.target.value)}
            />
          </div>
          <div className='form-group'>
            {
              tabState === 'login' ? (
                <input
                  type='submit'
                  className='btn btn-primary btn-block'
                  value={`${isSubmitting ? 'Loading...' : 'Login'}`}
                  disabled={isSubmitting}
                />
              ) : (
                  <input
                    type='submit'
                    className='btn btn-primary btn-block'
                    value={`${isSubmitting ? 'Loading...' : 'Signup'}`}
                    disabled={isSubmitting}
                  />
                )
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;