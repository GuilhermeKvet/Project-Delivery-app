const sinon = require('sinon');
const { expect } = require('chai');
const { User } = require('../../database/models');
const generateToken = require('../../api/Utils/generateToken');
const { tokenResponse } = require('./mocks/login.mock');
const { allUsers, allSellers, newUser, userRegister } = require('./mocks/user.mock');
const userService = require('../../api/Services/userService');

describe('Testando rota camada Service de users', () => {
  describe('Sucesso', () => {
    afterEach(() => sinon.restore());

    it('buscar por todos os usuarios', async () => {
      sinon.stub(User, "findAll").resolves(allUsers);
      const response = await userService.getAllUsers();

      expect(response).to.deep.equal(allUsers);
    });
    it('buscar por todos os vendedores', async () => {
      sinon.stub(User, "findAll").resolves(allSellers);
      const response = await userService.getAllSellers();

      expect(response).to.deep.equal(allSellers);
    });
    it('criar um novo usuario', async () => {
      sinon.stub(User, "findOne").resolves(null);
      sinon.stub(generateToken, "generateToken").resolves(tokenResponse);
      sinon.stub(User, "create").resolves(newUser);
      const response = await userService.createUser(newUser.dataValues);
      expect(response).to.deep.equal(userRegister);
    });
    it('Deletar um usuario', async () => {
      sinon.stub(User, "destroy").resolves();
      const response = await userService.deleteUser(1);

      expect(response).to.deep.equal();
    });
  });
});