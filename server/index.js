const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;

const videosRoute = require("./routes/videos");

app.use(cors());

app.use("/", videosRoute);

app.listen(PORT, () => {
  console.log("server with nodemon");
});
