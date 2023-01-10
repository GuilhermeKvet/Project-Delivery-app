const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require("chai-http");
const app = require('../../api/app');
const jwt = require("jsonwebtoken");

const {expect} = chai;

chai.use(chaiHttp);

const salesService = require('../../api/Services/salesService');

const { allSales, saleById, updateStatusSale, createSale, idNewSale } = require('../services/mocks/sales.mock');
const { validUser, tokenResponse } = require('../services/mocks/login.mock');

describe('Testando a camada de Controller de Sales', function () {
  it('Busca por todas as Vendas', async function () {
    sinon.stub(salesService, 'getAllSales').resolves(allSales);

    const httpCustomerResponse = await chai.request(app).get("/customer/orders");
    const httpSellerResponse = await chai.request(app).get("/seller/orders");

    expect(httpCustomerResponse.status).to.be.equal(200);
    expect(httpSellerResponse.status).to.be.equal(200);
    expect(httpCustomerResponse.body).to.be.deep.equal(allSales);
    expect(httpSellerResponse.body).to.be.deep.equal(allSales);
  });
  it('Busca uma venda por id', async function () {
    sinon.stub(salesService, 'getSaleById').resolves(saleById);

    const httpCustomerResponse = await chai.request(app).get("/customer/orders/1");
    const httpSellerResponse = await chai.request(app).get("/seller/orders/1");

    expect(httpCustomerResponse.status).to.be.equal(200);
    expect(httpSellerResponse.status).to.be.equal(200);
    expect(httpCustomerResponse.body).to.be.deep.equal(saleById);
    expect(httpSellerResponse.body).to.be.deep.equal(saleById);
  });
  it('Cria uma nova venda', async function () {
    sinon.stub(salesService, 'createSale').resolves(1);
    sinon.stub(jwt, "verify").resolves(validUser);
    const httpResponse = await chai.request(app).post("/customer/orders")
      .send(createSale).set('Authorization', tokenResponse);

    expect(httpResponse.status).to.be.equal(201);
    expect(httpResponse.body).to.be.deep.equal(1);
  });
  it('Tenta cria uma nova venda com o token invalido', async function () {
    const httpResponse = await chai.request(app).post("/customer/orders")
      .send(createSale).set('Authorization', 'invalid-token');

    expect(httpResponse.status).to.be.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Expired or invalid token' });
  });
  it('Tenta cria uma nova venda sem um token', async function () {
    const httpResponse = await chai.request(app).post("/customer/orders")
      .send(createSale);

    expect(httpResponse.status).to.be.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Token not found' });
  });
  it('Altera o status do pedido', async function () {
    sinon.stub(jwt, "verify").resolves(validUser);
    const httpResponse = await chai.request(app).post("/customer/orders/1/status")
    .send({
      status: "Pendente",
    })
    .set('Authorization', tokenResponse);;

    expect(httpResponse.status).to.be.equal(201);
  });
  afterEach(sinon.restore)
});