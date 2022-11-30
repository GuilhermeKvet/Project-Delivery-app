import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

function Login() {
  return (
    <div id="LoginComponent">
      <Input testId="1" placeholder="email@tryber.com" lable="Login" type="email" />
      <Input testId="2" placeholder="*********" lable="Senha" type="password" />
      <Button testId="3" text="LOGIN" />
      <Link to="register">
        <Button testId="4" text="Ainda não tenho conta" />
      </Link>
      <span data-testid="5" />
    </div>
  );
}

export default Login;
