const { Router } = require("express");
const genreRouter = Router();

const { addGenre } = require("./controllers2");

//POST-create a genre

genreRouter.post("/genres/addGenre", addGenre);

module.exports = genreRouter;
