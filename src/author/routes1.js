const { Router } = require("express");
const authorRouter = Router();
const { addAuthor } = require("./controller1");
const Author = require("./model1");

// Add single Author
authorRouter.post("/addAuthor", addAuthor);

module.exports = authorRouter;
