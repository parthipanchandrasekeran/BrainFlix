import axios from "axios";

export default function getcallfunction() {
  axios
    .get("http://localhost:4000/famousdish")
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
