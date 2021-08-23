const { User } = require("../models");

const userdata = [
  {
    user_name: "userNumeroUno",
    password: "password1",
  },
  {
    user_name: "userNumeroDos",
    password: "password2",
  },
  {
    user_name: "userNumeroTres",
    password: "password3",
  },
  {
    user_name: "userNumberoQuatro",
    password: "password4",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
