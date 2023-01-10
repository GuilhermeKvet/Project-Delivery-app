const sinon = require('sinon');
const { expect } = require('chai');
const { Sales } = require('../../database/models');
const { allSales, saleById, createSale, idNewSale, updateSaleById } = require('./mocks/sales.mock');
const salesService = require('../../api/Services/salesService');

describe('Testando rota /customer/orders e /seller/orders', () => {
  describe('Sucesso /customer/orders e /customer/orders', () => {

    afterEach(() => sinon.restore());

    it('Retorno de sucesso ao buscar por todas as vendas', async () => {
      sinon.stub(Sales, "findAll").resolves(allSales);
      const response = await salesService.getAllSales();

      expect(response).to.deep.equal(allSales);
    });
    it('Retorno de sucesso ao buscar uma vendas pelo id', async () => {
      sinon.stub(Sales, "findByPk").resolves(saleById);
      const response = await salesService.getSaleById(2);

      expect(response).to.deep.equal(saleById.dataValues);
    });
    it('Retorno de sucesso ao criar uma nova venda', async () => {
      sinon.stub(Sales, "create").resolves(idNewSale);
      const response = await salesService.createSale(createSale);

      expect(response).to.deep.equal(1);
    });
    it('Retorno de sucesso ao alterar o status da venda', async () => {
      sinon.stub(Sales, "update").resolves();
      sinon.stub(Sales, "findByPk").resolves(updateSaleById);
      const response = await salesService.changeStatus(1, 'Pendente');

      expect(response).to.deep.equal(updateSaleById);
    });
  });
  describe('Erro /customer/orders e /seller/orders', () => {
    afterEach(() => sinon.restore());

    it('Retorno de sucesso ao buscar uma vendas pelo id', async () => {
      sinon.stub(Sales, "findByPk").resolves(null);

      try {
        await salesService.getSaleById(1);
      } catch (error) {
        expect(error.message).to.deep.equal('Not found');
      }
    });
  });
});