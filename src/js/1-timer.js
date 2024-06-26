const elements = {
    dataTimePicker: document.querySelector("#datatime-picker"),
    start: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]")
}
// console.log("Days", elements.days);  //  перевірка доступу до ключів
console.log("dataTimePicker", elements.dataTimePicker)

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