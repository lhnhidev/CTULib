const Blogs = require("../models/blogs.js");

class BlogsController {
  async index(req, res) {
    res.json(await Blogs.find({}));
  }
}

module.exports = new BlogsController();
