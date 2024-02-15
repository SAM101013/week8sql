const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Genre = sequelize.define("Genre", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Genre;
