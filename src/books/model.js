const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      defaultValue: "some author",
    },
    genre: {
      type: DataTypes.STRING,
      defaultValue: "some genre",
    },
  },
  { timestamps: false }
);

// Define associations

const Author = require("../author/model1");

Book.belongsTo(Author);

module.exports = Book;
