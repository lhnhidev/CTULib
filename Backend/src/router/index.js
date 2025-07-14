const booksRouter = require("./books.routes");
const publishersRouter = require("./publishers.routes");
const blogsRouter = require("./blogs.routes");
const votesRouter = require("./votes.routes.js");
const bookFeaturesRouter = require("./bookFeatures.routes.js");
const registerRouter = require("./register.routes.js");

const router = (app) => {
  app.use("/books", booksRouter);
  app.use("/publishers", publishersRouter);
  app.use("/blogs", blogsRouter);
  app.use("/votes", votesRouter);
  app.use("/bookFeatures", bookFeaturesRouter);
  app.use("/register", registerRouter);
};

module.exports = router;
