import React, { useContext, useEffect } from 'react';
import AppContext from '../../Context/AppContext';
import Header from '../../Components/Header';
import UserRow from '../../Components/UserRow';
import TableUserHeader from '../../Components/TableUserHeader';
import RegisterForm from '../../Components/RegisterForm';

function HomeAdmin() {
  // const [users, setUsers] = useState([]);

  const {
    error,
    setName,
    setEmail,
    setPassword,
    users,
    setUsers,
  } = useContext(AppContext);

  useEffect(() => {
    setName('');
    setEmail('');
    setPassword('');
  }, [setEmail, setName, setPassword]);

  useEffect(() => {
    const request = async () => {
      const response = await fetch('http://localhost:3001/users');
      const data = await response.json();
      setUsers(data.filter((user) => user.role !== 'administrator'));
    };
    request();
  }, [setUsers]);

  return (
    <div>
      <Header
        text="GERENCIAR USUÁRIOS"
        orderPageRoute="/admin/manage"
      />
      <span data-testid="admin_manage__element-invalid-register" />
      <RegisterForm />
      <span>
        {error.message}
      </span>
      <table>
        <TableUserHeader />
        <tbody>
          { users.map((user, index) => (<UserRow
            key={ `${user.id}${index}` }
            index={ index }
            id={ user.id }
            name={ user.name }
            email={ user.email }
            type={ user.role }
          />)) }
        </tbody>
      </table>
    </div>
  );
}

export default HomeAdmin;
