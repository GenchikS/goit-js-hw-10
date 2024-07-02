import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

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
    if (selectedDates[0] - options.defaultDate > 0) {
        elements.btn.disabled = false;
    }
  },
};

const fp = flatpickr("#datatime-picker", options);

elements.btn.addEventListener("click", startTimer);

function startTimer() {
  // console.log("selectedDates[0]", (fp.selectedDates[0]).getTime());  //  перевірка отримання обраної дати
  // console.log("options.defaultDate", Date.parse(options.defaultDate));  //  перевірка поточної дати дати
  let counter = (fp.selectedDates[0]).getTime() - Date.parse(options.defaultDate);
  // console.log("counter", counter);  //  перевірка різниці часу
  elements.btn.disabled = true;
  elements.dataTimePicker.disabled = true;
  counter = counter / 1000; // перетворення в секунди

  const setIntervalUser = setInterval(() => {
    const day = Math.floor(counter / 60 / 60 / 24);
    const hour = Math.floor((counter / 60 / 60)%24);
    const minutes = Math.floor((counter / 60)%60);
    const seconds = Math.floor(counter%60);

    if (0 < counter) {
      counter -= 1;
    } else if (counter === 0) {
      clearInterval(setIntervalUser);
      iziToast.show({
        message: 'Відлік часу закінчено'
      
});
  }  

    elements.days.textContent = `${String((day.toFixed())).padStart(2, 0)}`;
    elements.hours.textContent = `${String((hour.toFixed())).padStart(2, 0)}`;
    elements.minutes.textContent = `${String((minutes.toFixed())).padStart(2, 0)}`;
    elements.seconds.textContent = `${String((seconds.toFixed())).padStart(2, 0)}`;
  }, 1000)
}

