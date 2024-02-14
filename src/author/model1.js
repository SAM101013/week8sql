const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Author = sequelize.define(
  "Author",
  {
    firstName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: "some author",
    },
    Location: {
      type: DataTypes.STRING,
      defaultValue: "some genre",
    },
  },
  { timestamps: false }
);

module.exports = Author;
