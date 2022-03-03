import axios from "axios";

export default function getcallfunction() {
  axios
    .get("http://localhost:4000/videos/25ce5d91-a262-4dcf-bb87-42b87546bcfa")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
