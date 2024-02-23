const Author = require("./model1");
const Book = require("../books/model");

Author.hasMany(Book);

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    res
      .status(201)
      .json({ message: `${author.title} was added`, author: author }); // fix Author.title to author.title
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getSingleAuthorById = async (req, res) => {
  const author = await Author.findOne({
    where: { author: req.params.Id },
  });

  res.send({ message: "success", author: author });
};
module.exports = {
  addAuthor: addAuthor,
  getSingleAuthorById: getSingleAuthorById,
};
