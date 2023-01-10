const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require("chai-http");
const app = require('../../api/app');
const jwt = require("jsonwebtoken");

const {expect} = chai;

chai.use(chaiHttp);

const userService = require('../../api/Services/userService');

const { allUsers, allSellers } = require('../services/mocks/user.mock');
const { tokenResponse, validNewUser, validUser } = require('../services/mocks/login.mock');

describe('Testando a camada de Controller de User', function () {
  it('Busca por todos os usuarios', async function () {
    sinon.stub(userService, 'getAllUsers').resolves(allUsers);
    const httpResponse = await chai.request(app).get("/users");

    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(allUsers);
  });
  it('Busca por todos os Vendedores', async function () {
    sinon.stub(userService, 'getAllSellers').resolves(allSellers);
    const httpResponse = await chai.request(app).get("/sellers");

    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(allSellers);
  });
  it('Cria um novo usuario', async function () {
    sinon.stub(userService, 'createUser').resolves(validNewUser)
    const httpResponse = await chai.request(app).post("/users/create")
    .send({
        name: "Guilherme Kvet",
        email: "guilherme@kvet.com",
        password: "123456",
        role: "seller"
      }).set('Authorization', tokenResponse);

    expect(httpResponse.status).to.be.equal(201);
    expect(httpResponse.body).to.be.deep.equal(validNewUser);
  });
  it('Tenta eletar um usuario sem ser um adm', async function () {
    sinon.stub(jwt, "verify").resolves(validNewUser);
    const httpResponse = await chai.request(app).post("/users/create")
    .send({
        name: "Guilherme Kvet",
        email: "guilherme@kvet.com",
        password: "123456",
        role: "seller"
      }).set('Authorization', tokenResponse);

    expect(httpResponse.status).to.be.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Protect route' });
  });
  it('Deleta um usuario', async function () {
    sinon.stub(userService, 'deleteUser').resolves();
    const httpResponse = await chai.request(app).delete("/users/delete/1").set('Authorization', tokenResponse);

    expect(httpResponse.status).to.be.equal(204);
  });
  it('Tenta eletar um usuario sem ser um adm', async function () {
    sinon.stub(jwt, "verify").resolves(validNewUser);
    const httpResponse = await chai.request(app).delete("/users/delete/1").set('Authorization', tokenResponse);

    expect(httpResponse.status).to.be.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Protect route' });
  });
  afterEach(sinon.restore)
});