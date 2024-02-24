const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

const port = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
