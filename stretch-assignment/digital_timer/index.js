function timer() {
  let seconds = 0;
  let milliseconds = 0;

  let timer = setInterval(function() {
    milliseconds += 10;
    seconds = Math.floor(milliseconds / 1000);

    (milliseconds % 1000) / 10 < 10
      ? (document.querySelector(
          ".digits"
        ).innerHTML = `<h1>0${seconds}:0${(milliseconds % 1000) / 10}</h1>`)
      : (document.querySelector(
          ".digits"
        ).innerHTML = `<h1>0${seconds}:${(milliseconds % 1000) / 10}</h1>`);

    if (seconds === 10) {
      document.querySelector(
        ".digits"
      ).innerHTML = `<h1>${seconds}:0${(milliseconds % 1000) / 10}</h1>`;

      document.querySelector(".digits").classList.add('redDigit');

      clearInterval(timer);
    }
  }, 10);
}
