import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as r}from"./assets/vendor-2b44ac2e.js";const t={dataTimePicker:document.querySelector("#datatime-picker"),btn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};t.btn.disabled=!0;const n={minDate:"today",enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]-n.defaultDate>0&&(t.btn.disabled=!1)}},a=r("#datatime-picker",n);t.btn.addEventListener("click",d);function d(){let e=0;e=Date.parse(a.selectedDates[0])-new Date,console.log("fp",a.selectedDates[0]),console.log("counter",e),t.btn.disabled=!0,setInterval(()=>{const o=e/60/60/24/365;t.days.textContent=o.toFixed(0)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
