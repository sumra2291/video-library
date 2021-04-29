const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000;
const home = require("./routes/home");
const genres = require("./routes/genres");

// Adding a middleware for request processing
app.use(express.json());
app.use("/", home);
app.use("/api/genres", genres);

mongoose
  .connect("mongodb://localhost/VideoDatabase", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB...."))
  .catch((err) => console.log(`Could not connect to MongoDB... Error: ${err}`));

// Listen to the server on the localhost
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
