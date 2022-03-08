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

router.post("/videos/:videoID/comments", (req, res) => {
  fs.readFile("./data/video-details.json", "utf-8", (err, data) => {
    if (err) throw err;

    const tempVideoDetails = JSON.parse(data);
    const tempCommentBody = req.body;

    const modifiedVideoList = tempVideoDetails.map((video) => {
      const tempVideo = video;
      tempVideo.comments.unshift(tempCommentBody);

      if (video.id === req.params.videoID) {
        console.log(tempVideo);
        return { ...video, comments: tempVideo.comments };
      }
      return video;
    });

    const returnCommentList = modifiedVideoList.find((video) => {
      return video.id === req.params.videoID;
    });

    fs.writeFile(
      "./data/video-details.json",
      JSON.stringify(modifiedVideoList),
      () => {
        res.status(202).send(modifiedVideoList);
      }
    );
  });
});

module.exports = router;
