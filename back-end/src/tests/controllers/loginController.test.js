const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require("chai-http");
const app = require('../../api/app');

const {expect} = chai;

chai.use(chaiHttp);

const loginController = require('../../api/Controllers/loginController');
const loginService = require('../../api/Services/loginService');

const { validUser, validNewUser } = require('../services/mocks/login.mock');

describe('Testando a camada de Controller de Login', function () {
  it('Faz o login com um usuario existente', async function () {
    sinon.stub(loginService, 'login').resolves(validUser);

    const httpResponse = await chai.request(app).post("/login").send({
      email: "adm@deliveryapp.com",
      password: "--adm2@21!!--",
    });

    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(validUser);
  });
  it('Registra um novo usuario', async function () {
    sinon.stub(loginService, 'register').resolves(validNewUser);

    const httpResponse = await chai.request(app).post("/register").send({
      email: "guilhermevkvet22@gmail.com",
      password: "123456",
      name: "Guilherme Vinicius Kvet da Rocha",
      role: "seller"
    });

    expect(httpResponse.status).to.be.equal(201);
    expect(httpResponse.body).to.be.deep.equal(validNewUser);
  });
  it('Tentar fazer login com um usuario inexistente', async function () {
    const httpResponse = await chai.request(app).post("/login").send({
      email: "usuario@inexistente.com",
      password: "123456",
    });

    expect(httpResponse.status).to.be.equal(404);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Not found' });
  });
  it('Tenta registrar um usuario ja cadastrado', async function () {
    const httpResponse = await chai.request(app).post("/register").send({
      email: "adm@deliveryapp.com",
      password: "--adm2@21!!--",
      name: "Delivery App Admin",
      role: "administrator"
    });

    expect(httpResponse.status).to.be.equal(409);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Conflict' });
  });
  afterEach(sinon.restore)
});