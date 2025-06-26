const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const data = require("./config/db");
const router = require("./router");
const Book = require("./models/books.js");

app.use(cors());

data.connect();

router(app);

const main = async () => {
  const giaotrinhTargets = {
    theloai01: 15,
    theloai02: 16,
    theloai03: 6,
    theloai04: 10,
    theloai05: 13,
    theloai06: 9,
    theloai07: 14,
  };

  const allDocs = await Book.find().limit(19); // Lấy 19 document

  let index = 0;
  for (const [id, count] of Object.entries(giaotrinhTargets)) {
    for (let i = 0; i < count; i++) {
      const doc = allDocs[index % allDocs.length];

      if (!doc.idFeatures.includes(id)) {
        doc.idFeatures.push(id);
      }

      await doc.save();
      index++;
    }
  }
};

app.listen(port, async () => {
  main();
  console.log(`Example app listening on port ${port}`);
});
