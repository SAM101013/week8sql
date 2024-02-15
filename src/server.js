require("dotenv").config();
const express = require("express");
const bookRouter = require("./books/routes");
const authorRouter = require("./author/routes1");
const genreRouter = require("./genre/routes2");

// Import the models
const Book = require("./books/model");
const Author = require("./author/model1");
const Genre = require("./genre/model2");

const app = express();

app.use(express.json());

app.use("/books", bookRouter);
app.use("/author", authorRouter);
app.use("/genre", genreRouter);

const port = process.env.PORT || 5001;

const syncTables = async () => {
  try {
    const Book = require("./books/model"); // Adjust the path based on your file structure
    const Author = require("./author/model1"); // Adjust the path based on your file structure
    const Genre = require("./genre/model2"); // Adjust the path based on your file structure

    // Synchronize tables

    await Book.sync();
    await Author.sync();
    await Genre.sync();

    // Define associations
    Book.belongsTo(Author); // A book belongs to an author
    Book.belongsTo(Genre); // A book belongs to a genre
    Author.hasMany(Book); // An author can have many books
    Genre.hasMany(Book); // A genre can have many books

    console.log("Tables synchronized successfully");
  } catch (error) {
    console.error("Error synchronizing tables:", error);
  }
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`Server is listening on port ${port}`);
});
