let videoDetails = [];
const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/videos", (_, res) => {
  fs.readFile("./data/video-details.json", "utf-8", (err, data) => {
    if (err) throw err;

    videoDetails = JSON.parse(data);
    res.status(202).send(videoDetails);
  });
});

router.get("/videos/:videoID", (req, res) => {
  const mainVideoDetails = videoDetails.find((video) => {
    return video.id === req.params.videoID;
  });

  mainVideoDetails
    ? res.status(202).send(mainVideoDetails)
    : res.status(404).send("no luck");
});

router.post("/upload/:id", (req, res) => {
  fs.readFile("./data/video-details.json", "utf-8", (err, data) => {
    if (err) throw err;

    const tempVideoDetails = JSON.parse(data);

    tempVideoDetails.push(req.body);

    fs.writeFile(
      "./data/video-details.json",
      JSON.stringify(tempVideoDetails),
      () => {
        res.status(202).send(tempVideoDetails);
      }
    );
  });
});

module.exports = router;
