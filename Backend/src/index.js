const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const data = require("./config/db");
const router = require("./router");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

data.connect();

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
