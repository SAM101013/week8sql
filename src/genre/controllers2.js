const Genre = require("./model2");

const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create({
      genreName: req.body.id,
    });
    res
      .status(201)
      .json({ message: `${genre.genreName} was added`, genre: genre });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getSingleGenreById = async (req, res) => {
  const { id } = req.params; // Assuming your parameter is named 'id', not 'title'

  try {
    // Find genre by id
    const genre = await Genre.findOne({ where: { id } });

    if (!genre) {
      // If the genre is not found, return a 404 status code
      return res.status(404).json({ message: "Genre not found" });
    }

    // If the genre is found, return it
    res.status(200).json({ genre });
  } catch (error) {
    // If there's an error, return a 500 status code and the error message
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = {
  addGenre: addGenre,
  getSingleGenreById: getSingleGenreById,
};
