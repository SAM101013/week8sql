const { Router } = require("express");
const authorRouter = Router();
// const Author = require("./model1");
const { addAuthor } = require("./controller1");
const { getSingleAuthorByAuthorId } = require("./controller1");

//get Author by Id
authorRouter.get("/getSngleAuthorById/:authorId", getSingleAuthorByAuthorId);

// Add single Author
authorRouter.post("/addAuthor", addAuthor);

module.exports = authorRouter;
