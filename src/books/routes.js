const { Router } = require("express");
const bookRouter = Router();
const {
  addBook,
  getAllBooks,
  getSingleBookByTitle,
  updateBookAuthor,
  deleteSingleBookByTitle,
} = require("./controllers");

// Add a new book
bookRouter.post("/addBook", addBook);

// Get all books
bookRouter.get("/getAllBooks", getAllBooks);

// Update book author by title
bookRouter.put("/updateBookAuthor/:title", updateBookAuthor);

bookRouter.delete(
  "/books/deleteSingleBookByTitle/:title",
  deleteSingleBookByTitle
);

// Get a single book by title
bookRouter.get("/getSingleBookByTitle/:title", getSingleBookByTitle);

module.exports = bookRouter;
