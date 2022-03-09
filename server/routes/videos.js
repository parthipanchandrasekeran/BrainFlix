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
  //update get read call here
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
        videoDetails = tempVideoDetails;
      }
    );
  });
});

router.post("/videos/:videoID/comments", (req, res) => {
  const dataModifierCall = new Promise((resolve, reject) => {
    const modifiedVideoList = videoDetails.map((video) => {
      const tempComment = video.comments;
      tempComment.unshift(req.body);

      if (video.id === req.params.videoID) {
        //console.log(video.id + "   &   " + req.params.videoID);
        return { ...video, comments: tempComment };
      } else {
        //console.log(video.id + "   &   " + req.params.videoID);
        return video;
      }
    });
    resolve(modifiedVideoList);
    console.log(modifiedVideoList.comments);
  });
  //const tempVideoDetails = JSON.parse(data);

  dataModifierCall
    .then((success) => {
      fs.writeFile("./data/video-details.json", JSON.stringify(success), () => {
        res.status(202).send(success);
        videoDetails = success;
        //console.log(success);
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
