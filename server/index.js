const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

const accidentRouter = require("./routes/accidentRouter");

const { connectToDB } = require("./db/connectToDb");

const port = 3000 || process.env.PORT;

app.use(cors());
app.use(express.json());

connectToDB(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB: ", err);
  });

app.use("/accidents", accidentRouter);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
