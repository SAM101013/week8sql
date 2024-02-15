const Book = require("./model");
const Author = require("../author/model1");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json({ message: "Success", books: books });
  } catch (error) {
    console.error("Error retrieving books:", error);
    res.status(500).json({ message: "Failed to retrieve books", error: error });
  }
};

const addBook = async (req, res) => {
  try {
    const { title, author, genre } = req.body;
    const book = await Book.create({ title, author, genre });
    res.status(201).json({ message: `${book.title} was added`, book: book });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ message: "Failed to add book", error: error });
  }
};

const addAuthor = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const author = await Author.create({ firstName, lastName });
    res.status(201).json({ message: `${author.firstName} ${author.lastName} was added`, author: author });
  } catch (error) {
    console.error("Error adding author:", error);
    res.status(500).json({ message: "Failed to add author", error: error });
  }
};

module.exports = {
  getAllBooks: getAllBooks,
  addBook: addBook,
  addAuthor: addAuthor,
};
