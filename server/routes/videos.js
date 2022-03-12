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

    const updatedCommentList = deletedVideo[0].comments.filter((comment) => {
      return String(comment.id) !== commentIDDeleted;
    });

    const updatedVideoList = [
      { ...deletedVideo[0], comments: updatedCommentList },
    ];

    removedVideoList.unshift(updatedVideoList[0]);

    fs.writeFile(
      "./data/video-details.json",
      JSON.stringify(removedVideoList),
      () => {
        res.status(202).send(removedVideoList);
      }
    );
  });
});

router.put("/videos/:videoID/likes", (req, res) => {
  readCallPromise.then((success) => {
    const likedVideo = success.filter((video) => {
      return video.id === req.params.videoID;
    });

    let tempLike = 0;
    console.log(req.params.videoID);
    tempLike = parseInt(likedVideo[0].likes.replace(/,/g, ""));
    tempLike++;
    likedVideo[0].likes = tempLike.toLocaleString("en-CA");
    success.splice(0, 1, likedVideo[0]);

    const finalVideoList = success;

    fs.writeFile(
      "./data/video-details.json",
      JSON.stringify(finalVideoList),
      () => {
        res.status(202).send(finalVideoList);
      }
    );
  });
});

module.exports = router;
