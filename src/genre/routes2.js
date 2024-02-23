const { Router } = require("express");
const genreRouter = Router();
const { getSingleGenreById } = require("./controllers2");
const { addGenre } = require("./controllers2");

//get Author by Id
genreRouter.get("/getSngleGenreById/:Id", getSingleGenreById);

// Add single Author
genreRouter.post("/addGenre", addGenre);

module.exports = genreRouter;
