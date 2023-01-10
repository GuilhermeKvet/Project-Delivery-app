const { Products } = require('../../database/models');
const { expect } = require('chai');
const sinon = require('sinon');

const productsService = require('../../api/Services/productsService');

const { products } = require('./mocks/product.mock');

describe('Tentando a camada Service de Products', function () {
  it('Retorna todos os produtos cadastrados', async function () {
    sinon.stub(Products, 'findAll').resolves(products);
    const response = await productsService.getAllProducts();
        
    expect(response).to.equal(products);
  });
  afterEach(sinon.restore);
});