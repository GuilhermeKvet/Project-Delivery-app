import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

function Login() {
  const { email, password, disableLoginButton } = useContext(AppContext);

  const navigate = useNavigate();

  const request = async () => {
    const url = 'http://localhost:3001/login';
    const fields = { email, password };
    const body = JSON.stringify(fields);

    const response = await fetch(url, {
      body,
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
    });

    console.log('RESPONSE', response);
  };

  return (
    <div id="LoginComponent">
      <Input
        testId="common_login__input-email"
        placeholder="email@tryber.com"
        lable="Login"
        type="email"
        state={ email }
      />
      <Input
        testId="common_login__input-password"
        placeholder="*********"
        lable="Senha"
        type="password"
        state={ password }
      />
      <Button
        testId="common_login__button-login"
        text="LOGIN"
        type="login"
        disable={ disableLoginButton }
        exec={ request }
      />
      <Button
        testId="common_login__button-register"
        type="register"
        text="Ainda não tenho conta"
        exec={ () => navigate('/register') }
      />
      <span data-testid="common_login__element-invalid-email" />
    </div>
  );
}

export default Login;
