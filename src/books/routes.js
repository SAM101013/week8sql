const { Router } = require("express");
const bookRouter = Router();
const { addBook } = require("./controllers");
const { deleteBook } = require("./controllers");
const Book = require("./model");

//Get All Books

// Define a route to get all books
bookRouter.get("/books/allBooks", async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.json(allBooks);
  } catch (error) {
    console.error("Error getting books:", error);
    res.status(500).json({ message: "Server error" });
  }
});

//Add single book
bookRouter.post("/books/addBook", addBook);

// Get single book
bookRouter.get("/books/:title", async (req, res) => {
  const { title } = req.params;

  try {
    const book = await Book.findOne({ title });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    console.error("Error getting book:", error);
    res.status(500).send({ message: "Server error" });
  }
});

// Update single book

bookRouter.put("/books/:title", async (req, res) => {
  const { title } = req.params;
  const { author, genre } = req.body;

  try {
    const updatedBook = await Book.findOneAndUpdate(
      { title },
      { author, genre },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(414).json({ message: "Book not found" });
    }
    res.json({
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send({ message: "Server error" });
  }
});

// Delete book by title
bookRouter.delete("/books/:title", async (req, res) => {
  const { title } = req.params;

  try {
    const deletedBook = await Book.findOneAndDelete({ title });
    if (!deletedBook) {
      return res.status(414).json({ message: "Book not found" });
    }
    res.json({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = bookRouter;
