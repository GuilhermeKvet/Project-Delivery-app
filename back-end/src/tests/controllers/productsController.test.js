const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require("chai-http");
const app = require('../../api/app');

const {expect} = chai;

chai.use(chaiHttp);

const productsController = require('../../api/Controllers/productsController');
const productsService = require('../../api/Services/productsService');

const { products } = require('../services/mocks/product.mock');

describe('Testando a camada de Controller de Products', function () {
  it('Buscar por todos os produtos', async function () {
    const httpResponse = await chai.request(app).get("/customer/products");

    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(products);
  });
  afterEach(sinon.restore)
});