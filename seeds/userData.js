const { User } = require("../models");

const userdata = [
  {
    username: "userNumeroUno",
    password: "password1",
  },
  {
    username: "userNumeroDos",
    password: "password2",
  },
  {
    username: "userNumeroTres",
    password: "password3",
  },
  {
    username: "userNumberoQuatro",
    password: "password4",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
