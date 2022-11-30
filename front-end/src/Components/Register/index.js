import Input from '../Forms/Input';
import Button from '../Forms/Button';

function Register() {
  return (
    <div id="RegisterComponent">
      <span> Cadastro </span>
      <section id="RegisterForm">
        <Input testId="6" placeholder="Seu nome" lable="Nome" type="text" />
        <Input
          testId="7"
          placeholder="seu-email@site.com.br"
          lable="Email"
          type="email"
        />
        <Input testId="8" placeholder="*********" lable="Senha" type="password" />
        <Button testId="9" text="CADASTRAR" />
        <span data-testid="10"> </span>
      </section>
    </div>
  );
}

export default Register;
