import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const elements = {
    dataTimePicker: document.querySelector("#datatime-picker"),
    btn: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]")}
// console.log("Days", elements.days);  //  перевірка доступу до ключів

elements.btn.disabled = true;

const options = {
  minDate: "today",
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0] - options.defaultDate > 0) {
        elements.btn.disabled = false;
    }
  },
};

const fp = flatpickr("#datatime-picker", options);

elements.btn.addEventListener("click", startTimer);

function startTimer() {
  let counter = 0;
  counter = Date.parse(fp.selectedDates[0]) - new Date();
  console.log("fp", fp.selectedDates[0]);
  console.log("counter", counter);
  elements.btn.disabled = true;

  setInterval(() => {
  
const day = counter / 60 / 60 / 24 / 365;
// const hour = currentTime.getHours();
// const minute = currentTime.getMinutes();
// const second = currentTime.getSeconds();

elements.days.textContent = day.toFixed(0);
// elements.hours.textContent = hour;
// elements.minutes.textContent = minute;
// elements.seconds.textContent = second;
}, 1000)

}






// elements.dataTimePicker.addEventListener("input", fp);
// function fp(event) {
//   elements.btn.addEventListener("click", fp1);
//   console.log("event", event)
// if (flp) {
//   console.log(flp.currentMonth)
//   // elements.btn.disabled = false;
// }
// }
  
// function fp1() {
//   elements.btn.disabled = false;
// }

    //   dataTimePicker.addEventListener("click", fp);
    // function fp(event) {
    //   console.log("event", event)
    // }


// const fp = flatpickr("#datatime-picker", options);  //  обраний час



// console.log("fp", fp.value)




// console.log("counter", counter)

// setInterval(() => {
  
// const day = currentTime.getDate();
// const hour = currentTime.getHours();
// const minute = currentTime.getMinutes();
// const second = currentTime.getSeconds();

// elements.days.textContent = day;
// elements.hours.textContent = hour;
// elements.minutes.textContent = minute;
// elements.seconds.textContent = second;
// }, 1000)



// console.log("counter", counter)

// const id = setInterval(() => {
//     counter -= 1;
//     if (0 < counter) {
//         console.log("counter", counter);
//     } else if (counter === 0) {
//         console.log(`counter ${counter} - STOP`);
//     }
// }, 1000)



