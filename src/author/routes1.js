const { Router } = require("express");
const authorRouter = Router();
const Author = require("./model1");
const { addAuthor } = require("./controller1");

// Add single Author
authorRouter.post("./books/addAuthor", addAuthor);

module.exports = authorRouter;
