function naughtyOrNice(data) {
    let naughty = 0;
    let nice = 0;

    Object.keys(data).forEach((month) => {
      Object.keys(data[month]).forEach((day) => {
        data[month][day] === "Naughty" ? naughty++ : nice++;
      });
    });
    return naughty > nice ? "Naughty!" : "Nice!";
}
