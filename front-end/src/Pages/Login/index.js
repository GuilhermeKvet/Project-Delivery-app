import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasLogin = JSON.parse(localStorage.getItem('user'));
    if (hasLogin) {
      navigate('/customer/products');
    }
  }, [navigate]);

  const {
    email,
    password,
    disableLoginButton,
    setError,
    setName,
  } = useContext(AppContext);

  const request = async () => {
    const url = 'http://localhost:3001/login';
    const fields = { email, password };
    const body = JSON.stringify(fields);

    const response = await fetch(url, {
      body,
      method: 'post',
      headers: { 'Content-type': 'application/json' },
    });

    const user = await response.json();

    if (response.ok === false) {
      setError({ message: response.statusText, status: response.status });
    } else {
      setName(user.name);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('carrinho', JSON.stringify([]));
      navigate('/customer/products');
    }
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
        disable={ Boolean(disableLoginButton) }
        exec={ request }
      />
      <Button
        testId="common_login__button-register"
        disable={ false }
        text="Ainda não tenho conta"
        exec={ () => navigate('/register') }
      />
      <span data-testid="common_login__element-invalid-email" />
    </div>
  );
}

export default Login;
