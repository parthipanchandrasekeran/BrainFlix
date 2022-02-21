import moment from "moment";

function dateFormatter(dateFormated) {
  return moment(dateFormated).fromNow();
}

export default dateFormatter;
