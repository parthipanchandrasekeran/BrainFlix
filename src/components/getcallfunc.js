import axios from "axios";

export default function getcallfunction() {
  axios
    .get("https://localhost:4000/videos/")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
