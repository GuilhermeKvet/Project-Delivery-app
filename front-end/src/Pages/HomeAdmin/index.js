import React, { useContext, useEffect } from 'react';
import AppContext from '../../Context/AppContext';
import Header from '../../Components/Header';
import UserRow from '../../Components/UserRow';
import TableUserHeader from '../../Components/TableUserHeader';
import RegisterForm from '../../Components/RegisterForm';
import '../../Styles/adm.css';

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
    <div className="admPage">
      <Header
        page="adm"
        orderPageRoute="/admin/manage"
      />
      <span data-testid="admin_manage__element-invalid-register" />
      <div className="RegisterForm">
        <RegisterForm />
      </div>
      <span>
        {error.message}
      </span>
      <br />
      <table className="table">
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
