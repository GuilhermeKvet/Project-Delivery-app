const user = {
  dataValues: {
    name: "Delivery App Admin",
    password: "a4c86edecc5aee06eff8fdeda69e0d04",
    email: "adm@deliveryapp.com",
    role: "administrator",
  },
}

const newUser = {
  dataValues: {
    name: "Guilherme Vinicius Kvet da Rocha",
    email: "guilhermevkvet22@gmail.com",
    role: "seller",
  },
}

const validNewUser = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTY3MTEyOTcwMH0.n5YUw5fjpWhFXvqP38g7SOHASFdkjZhJIZ5kdqjtl6Q",
  name: "Guilherme Vinicius Kvet da Rocha",
  email: "guilhermevkvet22@gmail.com",
  role: "seller"
};

const validUser = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTY3MTEyOTcwMH0.n5YUw5fjpWhFXvqP38g7SOHASFdkjZhJIZ5kdqjtl6Q",
  name: "Delivery App Admin",
  email: "adm@deliveryapp.com",
  role: "administrator"
};

const tokenResponse = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImlhdCI6MTY3MTEyOTcwMH0.n5YUw5fjpWhFXvqP38g7SOHASFdkjZhJIZ5kdqjtl6Q";

const invalidUser = { message: 'Not found' };

module.exports = {
  user,
  validUser,
  tokenResponse,
  invalidUser,
  newUser,
  validNewUser,
};
