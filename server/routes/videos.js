let videoDetails = [];
let videos = [];
const express = require("express");
const fs = require("fs");
const router = express.Router();

fs.readFile("./data/video-details.json", "utf-8", (err, data) => {
  if (err) throw err;

  videoDetails = JSON.parse(data);
});

fs.readFile("./data/videos.json", "utf-8", (err, data) => {
  if (err) throw err;

  videos = JSON.parse(data);
});

router.get("/videos", (_, res) => {
  res.status(202).send(videos);
});

router.get("/videos/:videoID", (req, res) => {
  const mainVideoDetails = videoDetails.find((video) => {
    return video.id === req.params.videoID;
  });

  mainVideoDetails
    ? res.status(202).send(mainVideoDetails)
    : res.status(404).send("no luck");
});

const soup = ["tomato soup", "sweet corn", "manchow", "lobstar tail"];
const salad = [
  "tomato salad",
  "sweet corn salad",
  "manchow salad",
  "lobstar tail salad",
];

router.get("/famousdish", (req, res) => {
  res.status(202).send("famous dish is surf and tail lobster");
});
router.get("/soups", (req, res) => {
  res.status(202).json(soup);
});

router.get("/salads", (req, res) => {
  res.status(202).json(salad);
});

module.exports = router;
