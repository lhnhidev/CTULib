const booksRouter = require("./books.routes");
const publishersRouter = require("./publishers.routes");

const router = (app) => {
  app.use("/books", booksRouter);
  app.use("/publishers", publishersRouter);
};

module.exports = router;
