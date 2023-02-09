import { useContext } from 'react';
import AppContext from '../../Context/AppContext';

function UserRow(prop) {
  const { index, id, name, email, type } = prop;

  const { setUsers, users } = useContext(AppContext);

  const rmUser = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const url = `http://localhost:3001/users/delete/${id}`;

    await fetch(url, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
    });

    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <tr>
      <td
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        {id}
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-name-${index}` }
      >
        {name}
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-email-${index}` }
      >
        { email }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-role-${index}` }
      >
        { type }
      </td>
      <td>
        <button
          type="button"
          onClick={ rmUser }
          data-testid={ `admin_manage__element-user-table-remove-${index}` }
          className="rmButton"
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

export default UserRow;
