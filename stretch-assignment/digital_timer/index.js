function timer() {
  let seconds = 0;
  let milliseconds = 0;

  let timer = setInterval(function() {
    milliseconds += 10;
    seconds = Math.floor(milliseconds / 1000);

    // resetting stuff from the last timer run
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector(".digits").classList.remove("pulse");
    document.querySelector('.digits').classList.remove('redDigit');
    document.querySelector('button').innerHTML = 'Start Timer';

    // timer formatting
    (milliseconds % 1000) / 10 < 10
      ? (document.querySelector(
          ".digits"
        ).innerHTML = `<h1>0${seconds}:0${(milliseconds % 1000) / 10}</h1>`)
      : (document.querySelector(
          ".digits"
        ).innerHTML = `<h1>0${seconds}:${(milliseconds % 1000) / 10}</h1>`);

    // time running out formatting
    if(seconds >= 7) {
      document.querySelector('.digits').classList.add('redDigit');
      document.querySelector(".digits").classList.add("pulse");
      document.querySelector('body').style.backgroundColor = 'black';
    }

    // end of time interval formatting
    if (seconds === 10) {
      document.querySelector(
        ".digits"
      ).innerHTML = `<h1>${seconds}:0${(milliseconds % 1000) / 10}</h1>`;

      document.querySelector('button').innerHTML = 'Restart';
      clearInterval(timer);
    }
  }, 10);
}
