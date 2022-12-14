import Header from '../../Components/Header';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

function HomeAdmin() {
  return (
    <div>
      <Header text="GERENCIAR USUÁRIOS" />
      <span data-testid="admin_manage__element-invalid-register" />
      <form>
        <Input
          lable="Nome"
          placeholder="Nome e Sobrenome"
          type="text"
          testId="admin_manage__input-name"
        />
        <Input
          lable="Email"
          placeholder="seu-email@site.com.br"
          type="text"
          testId="admin_manage__input-email"
        />
        <Input
          lable="Senha"
          placeholder="************"
          type="text"
          testId="admin_manage__input-password"
        />
        <label htmlFor="select_user_type">
          Tipo
          <select id="select_user_type" data-testId="admin_manage__select-role">
            <option value="seller">Vendedor</option>
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <Button
          text="CADASTRAR"
          testId="admin_manage__button-register"
          exec={ () => console.log('catapimbas') }
        />
      </form>

    </div>
  );
}

export default HomeAdmin;
