import Button from '../Forms/Button';
import Input from '../Forms/Input';

function Login() {
  return (
    <div id="LoginComponent">
      <Input testId="1" placeholder="email@tryber.com" lable="Login" />
      <Input testId="2" placeholder="*********" lable="Senha" />
      <Button testId="3" text="LOGIN" />
      <Button testId="4" text="Ainda não tenho conta" />
      <span data-testid="5" />
    </div>
  );
}

export default Login;
