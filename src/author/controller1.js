const Author = require("./model1");

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      title: req.body.firstName,
      Author: req.body.lastName,
      genre: req.body.location,
    });
    res
      .status(201)
      .json({ message: `${Author.title} was added`, author: author });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addAuthor: addAuthor,
};
