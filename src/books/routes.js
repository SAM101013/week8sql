const { Router } = require("express");
const bookRouter = Router();
const {
  addBook,
  getAllBooks,
  getSingleBookByTitle,
  updateBookAuthor,
  deleteSingleBookByTitle,
} = require("./controllers");

const Book = require("./model");

// // Add a new book
bookRouter.post("/books/addBook", addBook);

// Get all books
bookRouter.get("/books/getAllBooks", getAllBooks);

// Update book author by title
bookRouter.put("/books/updateBookAuthor/:title", updateBookAuthor);

// Delete a single book by title
// bookRouter.delete( "/books/deleteSingleBookByTitle/:title",deleteSingleBookByTitle);

// // Get a single book by title
// bookRouter.get("/books/getSingleBookByTitle/:title", getSingleBookByTitle);

// Route to add a new book
bookRouter.post("/addBook", async (req, res) => {
  try {
    const { title, authorId, genre } = req.body;

    // Find the author by ID
    const author = await Author.findByPk(authorId);

    // Create a new book associated with the author
    const newBook = await Book.create({
      title: title,
      genre: genre,
    });

    // Associate the book with the author
    await newBook.setAuthor(author);

    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = bookRouter;
