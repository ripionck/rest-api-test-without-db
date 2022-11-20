const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "Vulu Lal",
    email: "vululal@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Kulu Lal",
    email: "kululal@gmail.com",
  },
];

module.exports = users;
