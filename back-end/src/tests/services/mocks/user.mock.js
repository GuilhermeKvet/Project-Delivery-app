const allUsers = [
  {
    "id": 2,
    "email": "adm@deliveryapp.com",
    "name": "Delivery App Admin",
    "password": "a4c86edecc5aee06eff8fdeda69e0d04",
    "role": "administrator",
  },
  {
    "id": 1,
    "name": "Delivery App Admin",
    "email": "adm@deliveryapp.com",
    "password": "a4c86edecc5aee06eff8fdeda69e0d04",
    "role": "administrator"
  },
  {
    "id": 3,
    "name": "Cliente Zé Birita",
    "email": "zebirita@email.com",
    "password": "1c37466c159755ce1fa181bd247cb925",
    "role": "customer"
  }
];

const allSellers = [
  {
    "id": 2,
    "name": "Fulana Pereira",
    "email": "fulana@deliveryapp.com",
    "password": "3c28d2b0881bf46457a853e0b07531c6",
    "role": "seller"
  }
];

const newUser = {
  dataValues: {
    name: "Guilherme Vinicius Kvet da Rocha",
    email: "guilhermevkvet22@gmail.com",
    password: "123456",
    role: "seller"
  }
}

const userRegister = {
  name: "Guilherme Vinicius Kvet da Rocha",
  email: "guilhermevkvet22@gmail.com",
  role: "seller",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTY3MTEyOTcwMH0.n5YUw5fjpWhFXvqP38g7SOHASFdkjZhJIZ5kdqjtl6Q",
}

module.exports = {
  allUsers,
  allSellers,
  newUser,
  userRegister,
}