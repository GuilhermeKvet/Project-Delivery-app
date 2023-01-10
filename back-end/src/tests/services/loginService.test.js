const sinon = require('sinon');
const { User } = require('../../database/models');
const generateToken = require('../../api/Utils/generateToken');
const { tokenResponse, invalidUser, validUser, user, newUser, validNewUser } = require('./mocks/login.mock');
const loginService = require('../../api/Services/loginService');
const { expect } = require('chai');

describe('Testando rota /login e /register', () => {
  describe('Sucesso /login', () => {
    beforeEach( async () => {
      sinon.stub(User, "findOne").resolves(user);
      sinon.stub(generateToken, "generateToken").resolves(tokenResponse);
    });
  
    afterEach(() => sinon.restore());

    it('Retorno de sucesso ao logar com um usuario valido', async () => {
      const response = await loginService.login('adm@deliveryapp.com', '--adm2@21!!--');

      expect(response).to.deep.equal(validUser);
    });
  });
  describe('Erro /login', () => {
    afterEach(() => sinon.restore());

    it('Verifica se ao logar com um usuario inexistente, gera um erro', async () => {
      sinon.stub(User, "findOne").resolves(null);
      try {
        await loginService.login('guilherme@gmail.com', '123456');
      } catch (error) {
        expect(error.message).to.equal(invalidUser.message);
      }
    });

    it('Verifica se ao logar com um usuario existente, mas com a senha incorreta, gera um erro', async () => {
      sinon.stub(User, "findOne").resolves(user);

      try {
        await loginService.login('adm@deliveryapp.com', 'adm2@21!!');
      } catch (error) {
        expect(error.message).to.equal('All fields must be filled');
      }
    });
  });
  describe('Sucesso /register', () => {
    beforeEach( async () => {
      sinon.stub(User, "findOne").resolves(false);
      sinon.stub(User, "create").resolves(newUser);
      sinon.stub(generateToken, "generateToken").resolves(tokenResponse);
    });
  
    afterEach(() => sinon.restore());

    it('Retorno de sucesso ao cadastrar um usuario valido', async () => {
      const response = await loginService.register(
        'Guilherme Vinicius Kvet da Rocha',
        'guilhermevkvet22@gmail.com',
        '123456',
        'seller',
      );

      expect(response).to.deep.equal(validNewUser);
    });

  });

  describe('Erro /register', async () => {
    beforeEach( async () => {
      sinon.stub(User, "findOne").resolves(user);
    });
  
    afterEach(() => sinon.restore());
    it('Retorno de erro ao tentar cadastrar um usuario ja existente', async () => {
      try {
        await loginService.register('adm@deliveryapp.com', '--adm2@21!!--');
      } catch (error) {
        expect(error.message).to.equal('Conflict');
      }

    });

  });
});