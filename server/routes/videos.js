let videoDetails;
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

  const tempVideoList = new Promise((resolve, reject) => {
    fs.readFile("./data/video-details.json", "utf-8", (err, data) => {
      if (err) throw err;

      videoDetails = JSON.parse(data);

      resolve(videoDetails);
    });
  });

  tempVideoList.then((success) => {
    const mainVideoDetails = success.find((video) => {
      return video.id === req.params.videoID;
    });

    mainVideoDetails
      ? res.status(202).send(mainVideoDetails)
      : res.status(404).send("no luck");
  });
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

const readCallPromise = new Promise((resolve, reject) => {
  fs.readFile("./data/video-details.json", "utf-8", (err, data) => {
    if (err) throw err;

    videoDetails = JSON.parse(data);
    resolve(videoDetails);
  });
});

router.post("/videos/:videoID/comments", (req, res) => {
  const dataModifierCall = new Promise((resolve, reject) => {
    readCallPromise.then((success) => {
      const selectedVideo = success.filter((video) => {
        return video.id === req.params.videoID;
      });

      console.log(selectedVideo);

      selectedVideo[0].comments.unshift(req.body);

      const modifiedVideoList = success.filter((video) => {
        return video.id !== req.params.videoID;
      });
      console.log(modifiedVideoList);

      modifiedVideoList.unshift(selectedVideo[0]);
      resolve(modifiedVideoList);
    });
  });
  dataModifierCall
    .then((success) => {
      fs.writeFile("./data/video-details.json", JSON.stringify(success), () => {
        res.status(202).send(success);
        //console.log(success);
      });
    })
    .catch((err) => console.log(err));
});

router.delete("/videos/:videoID/comments/:commentID", (req, res) => {
  const videoIDDeleted = req.params.videoID;
  const commentIDDeleted = req.params.commentID;

  readCallPromise.then((success) => {
    const deletedVideo = success.filter((video) => {
      return video.id === videoIDDeleted;
    });

    const removedVideoList = success.filter((video) => {
      return video.id !== videoIDDeleted;
    });
    //console.log(deletedVideo.data.comments[0]);
    const updatedCommentList = deletedVideo[0].comments.filter((comment) => {
      return String(comment.id) !== commentIDDeleted;
    });

    const updatedVideoList = [
      { ...deletedVideo[0], comments: updatedCommentList },
    ];

    removedVideoList.unshift(updatedVideoList[0]);

    //console.log(updatedVideoList);

    fs.writeFile(
      "./data/video-details.json",
      JSON.stringify(removedVideoList),
      () => {
        res.status(202).send(removedVideoList);
        //console.log(success);
      }
    );
  });
});

module.exports = router;
