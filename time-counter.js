const newYear = "2024-01-01";

function getRemainingTime(newYear) {
  const milliseconds = Date.parse(newYear) - Date.parse(new Date()),
    days = Math.floor(milliseconds / (1000 * 60 * 60 * 24)),
    hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((milliseconds / (1000 * 60)) % 60),
    seconds = Math.floor((milliseconds / 1000) % 60);

  console.log(Math.floor(milliseconds / (1000 * 60 * 60 *24)));
  console.log(Math.floor(milliseconds / (1000 * 60 * 60)%24));
  console.log(milliseconds);
  return {
    total: milliseconds,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else return num;
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds"),
    interval = setInterval(updateClock, 1000);
  
      

  updateClock();

  function updateClock() {
    const result = getRemainingTime(endtime);
    days.innerHTML = getZero(result.days);
    hours.innerHTML = getZero(result.hours);
    minutes.innerHTML = getZero(result.minutes);
    seconds.innerHTML = getZero(result.seconds);

    if (result.total <= 0) {
      clearInterval(interval);
    }
  }
}
setClock(".timer", newYear);

// console.log(getRemainingTime(newYear));

// const countLetters = (string) => {
//   let i = 0;
//   let result = 0;
//   while (i < string.length) {
//     result += 1;
//     i++;
//   }
//   return result;
// };
// console.log(
//   countLetters("We are a small agency that specializes in developing")
// );
