const { Router } = require("express");
const authorRouter = Router();
const { addAuthor } = require("./controller1");
const { getSingleAuthorById } = require("./controller1");

//get Author by Id
authorRouter.get("/getSngleAuthorById/:Id", getSingleAuthorById);

// Add single Author
authorRouter.post("/addAuthor", addAuthor);

module.exports = authorRouter;
