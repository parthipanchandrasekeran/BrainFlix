function dateFormatter(dateFormated) {
  const commentDate = new Date(dateFormated);
  const todaysDate = new Date();
  const diff = Math.abs(todaysDate - commentDate);
  const days = Math.round(diff / (1000 * 3600 * 24));

  let actualDays = 0;

  if (diff > 30) {
    actualDays = `${days} days ago`;
  }
  if (diff === 1) {
    actualDays = `${days} day ago`;
  }

  return actualDays;
}

export default dateFormatter;
