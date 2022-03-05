const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;

const videosRoute = require("./routes/videos");

app.use(express.static("public"));

/*app.use((req, res, next) => {
  const value = req.url.replace("/", "");

  if (value === "static") {
    console.log(value);
    next();
  } else {
    res.status(404).send("incorrect");
  }
});*/

app.use(cors());

app.use("/", videosRoute);

app.listen(PORT, () => {
  console.log("server with nodemon");
});
