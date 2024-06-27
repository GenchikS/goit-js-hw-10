const elements = {
    dataTimePicker: document.querySelector("#datatime-picker"),
    start: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]")
}
// console.log("Days", elements.days);  //  перевірка доступу до ключів


// elements.dataTimePicker.addEventListener("input",)

setInterval(() => {
const currentTime = new Date();
const toLocalTime = currentTime.toLocaleTimeString("uk-UA");
// console.log("toLocalTime", toLocalTime) //  перевірка локальності часу

const day = currentTime.getDate();
const hour = currentTime.getHours();
const minute = currentTime.getMinutes();
const second = currentTime.getSeconds();

elements.days.textContent = day;
elements.hours.textContent = hour;
elements.minutes.textContent = minute;
elements.seconds.textContent = second;
}, 1000)

flatpickr("#datatime-picker");
let counter = 0;

elements.start.addEventListener("click", inputDataTime);
function inputDataTime() {
    console.log("dataTimePicker", elements.dataTimePicker.value);

    // elements.dataTimePicker.textContent = newData();
    counter = newData(elements.dataTimePicker.textContent);
    return
}
console.log("counter", counter)

// const id = setInterval(() => {
//     counter -= 1;
//     if (0 < counter) {
//         console.log("counter", counter);
//     } else if (counter === 0) {
//         console.log(`counter ${counter} - STOP`);
//         const newData = getDate();
//         console.log("newData", newData)
//     }
// }, 1000)



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};