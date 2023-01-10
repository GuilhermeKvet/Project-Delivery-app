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

const updateStatusSale = {
  "id": 10,
  "userId": 1,
  "sellerId": 3,
  "totalPrice": "6.98",
  "deliveryAddress": "Rua Teste",
  "deliveryNumber": "1",
  "saleDate": "2022-12-15T22:32:21.000Z",
  "status": "Pendente",
  "products": [
    {
      "name": "Stella Artois 275ml",
      "price": "3.49",
      "SalesProducts": {
        "saleId": 10,
        "productId": 11,
        "quantity": 2
      }
    }
  ],
  "seller": {
    "name": "Cliente Zé Birita"
  }
}

module.exports = {
  allSales,
  saleById,
  createSale,
  idNewSale,
  updateSaleById,
  updateStatusSale
}