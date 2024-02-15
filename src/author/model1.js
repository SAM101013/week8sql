const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Author = sequelize.define("Author", {
  // Define model attributes
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Exports Author model
module.exports = Author;
