import React, { useContext, useState } from 'react';
import AppContext from '../../Context/AppContext';
import Input from '../Input';
import Button from '../Button';
import '../../Styles/adm.css';

function RegisterForm() {
  const [role, setRole] = useState('customer');

  const {
    email,
    password,
    name,
    disableRegisterButton,
    setError,
    users,
    setUsers,
  } = useContext(AppContext);

  const request = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const url = 'http://localhost:3001/users/create';
    const fields = { name, email, password, role };
    const body = JSON.stringify(fields);

    const response = await fetch(url, {
      body,
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
    });

    const user = await response.json();

    if (response.ok === false) {
      setError({ message: user.message, status: response.status });
    } else if (user.role !== 'administrator') {
      setUsers([...users, user]);
    }
  };

  return (
    <form className="form">
      <Input
        testId="admin_manage__input-name"
        placeholder="Nome e Sobrenome"
        lable="Nome"
        type="name"
        state={ name }
      />
      <Input
        lable="Email"
        placeholder="seu-email@site.com.br"
        type="email"
        testId="admin_manage__input-email"
        state={ email }
      />
      <Input
        lable="Senha"
        placeholder="************"
        type="password"
        testId="admin_manage__input-password"
        state={ password }
      />
      <label htmlFor="select_user_type" className="label">
        Tipo
        <select
          id="select_user_type"
          data-testid="admin_manage__select-role"
          onChange={ (e) => setRole(e.target.value) }
          className="form-select"
        >
          <option value="customer">Cliente</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
        </select>
      </label>
      <Button
        text="CADASTRAR"
        testId="admin_manage__button-register"
        exec={ request }
        disable={ Boolean(disableRegisterButton) }
        className="admButton"
      />
    </form>
  );
}

export default RegisterForm;
