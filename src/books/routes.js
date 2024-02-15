const { Router } = require("express");
const bookRouter = Router();
const { getAllBooks } = require("./controllers");

const Book = require("./model");

//navigator;

bookRouter.get("./books/getAllBooks", getAllBooks);
//Get All Books

//Route to add a single book
bookRouter.post("./books/addBook", async (req, res) => {
  try {
    const { title, author, genre } = req.body;

    // Check if the title already exists
    const existingBook = await Book.findOne({ where: { title: title } });
    if (existingBook) {
      return res.status(400).json({ message: "Book title already exists" });
    }

    // Create a new book record
    const newBook = await Book.create({
      title: title,
      author: author,
      genre: genre,
    });

    // Respond with the newly created book
    return res
      .status(201)
      .json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    console.error("Error adding book:", error);
    return res
      .status(500)
      .json({ message: "Failed to add book", error: error });
  }
});

// // Get single book
// bookRouter.get("/books/:title", async (req, res) => {
//   const { title } = req.params;

//   try {
//     const book = await Book.findOne({ title });
//     if (!book) {
//       return res.status(404).json({ message: "Book not found" });
//     }
//     res.json(book);
//   } catch (error) {
//     console.error("Error getting book:", error);
//     res.status(500).send({ message: "Server error" });
//   }
// });

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
