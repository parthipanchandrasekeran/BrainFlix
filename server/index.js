require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { PORT, BACKEND_URL } = process.env;
console.log(PORT);
const videosRoute = require("./routes/videos");

app.use(express.static("public"));
app.use("/static", express.static("public/Upload-video-preview.jpg"));

app.use((req, res, next) => {
  const value = req.url.replace("/", "");

  if (value !== "static") {
    console.log(value);
    next();
  } else {
    res.status(404).send("incorrect");
  }
});

app.use(cors());

app.use("/", videosRoute);

app.listen(PORT, () => {
  console.log("server with nodemon");
});
