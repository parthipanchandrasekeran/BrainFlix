import React from "react";

function dateFormatter(dateFormated) {
  const commentDate = new Date(dateFormated);

  let month = commentDate.getMonth() + 1;
  let day = commentDate.getDate();
  const year = commentDate.getFullYear();

  if (month / 10 < 1) {
    month = "0" + month;
  }

  if (day / 10 < 1) {
    day = "0" + day;
  }
  const actualDate = month + "/" + day + "/" + year;
  return actualDate;
}

export default dateFormatter;
