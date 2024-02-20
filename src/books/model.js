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
// Since you want each book to belong to an author, you should define a belongsTo association

const Author = require("../author/model1");

Book.belongsTo(Author); // Each book belongs to an author

module.exports = Book;
