import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import logo from '../../images/delivery-img.png';
import '../../Styles/register.css';

function Register() {
  const {
    name,
    email,
    password,
    disableRegisterButton,
    error,
    setError } = useContext(AppContext);

  const navigate = useNavigate();

  const request = async () => {
    const url = 'http://localhost:3001/register';
    const fields = { name, email, password, role: 'customer' };
    const body = JSON.stringify(fields);

    const response = await fetch(url, {
      body,
      method: 'post',
      headers: { 'Content-type': 'application/json' },
    });

    const user = await response.json();

    if (response.ok === false) {
      setError({ message: user.message, status: response.status });
    } else {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('carrinho', JSON.stringify([]));
      navigate('/customer/products');
    }
  };

  return (
    <div id="RegisterComponent" className="register">
      <section id="RegisterForm">
        <img
          src={ logo }
          alt=""
          className="logo"
        />
        <h1> Cadastro </h1>
        <hr
          width="100%"
          size="1"
        />
        <br />
        <Input
          testId="common_register__input-name"
          placeholder="Seu nome"
          lable="Nome"
          type="name"
          state={ name }
        />
        <br />
        <Input
          testId="common_register__input-email"
          placeholder="seu-email@site.com.br"
          lable="Email"
          type="email"
          state={ email }
        />
        <br />
        <Input
          testId="common_register__input-password"
          placeholder="*********"
          lable="Senha"
          type="password"
          state={ password }
        />
        <br />
        <Button
          testId="common_register__button-register"
          text="CADASTRAR"
          disable={ Boolean(disableRegisterButton) }
          exec={ request }
          className="registerButton"
        />
        <span
          data-testid="common_register__element-invalid_register"
        >
          {error.message}
        </span>
      </section>
    </div>
  );
}

export default Register;
