const Genre = require("./model2");

const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create({
      genreName: req.body.genre,
    });
    res
      .status(201)
      .json({ message: `${genre.genreName} was added`, genre: genre });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addGenre: addGenre,
};
