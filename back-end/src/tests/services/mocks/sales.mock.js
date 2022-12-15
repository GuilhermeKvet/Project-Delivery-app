const allSales = [
  {
    "id": 2,
    "userId": 2,
    "sellerId": 1,
    "totalPrice": "38.47",
    "deliveryAddress": "",
    "deliveryNumber": "",
    "saleDate": "2022-12-15T20:42:17.000Z",
    "status": "pendente"
  }
];

const saleById = {
  dataValues: {
    "id": 2,
    "userId": 2,
    "sellerId": 1,
    "totalPrice": "38.47",
    "deliveryAddress": "",
    "deliveryNumber": "",
    "saleDate": "2022-12-15T20:42:17.000Z",
    "status": "Pendente"
  }
}

const updateSaleById = {
  dataValues: {
    "id": 2,
    "userId": 2,
    "sellerId": 1,
    "totalPrice": "38.47",
    "deliveryAddress": "",
    "deliveryNumber": "",
    "saleDate": "2022-12-15T20:42:17.000Z",
    "status": "Preparando"
  }
}

const createSale = {
  fields: {
    userId: 2,
    sellerId: 1,
    totalPrice: 38.47,
    deliveryAddress: "Rua das Marmotas",
    deliveryNumber: "2",
    status: "pendente"
  },
  orderProducts: [
    {
      productId: 11,
      quantity: 10
    },
    {
      productId: 10,
      quantity: 1
    }
  ]
}

const idNewSale = {
  dataValues: {
    id: 1,
  }
}

module.exports = {
  allSales,
  saleById,
  createSale,
  idNewSale,
  updateSaleById,
}