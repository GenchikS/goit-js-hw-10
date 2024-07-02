// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const formSubmit = document.querySelector(".form")


formSubmit.addEventListener("submit", delayUser);

function delayUser(event) {
    event.preventDefault();
    const form = event.target;
    const delay = form.elements.delay.value;
    const stateUserInput = form.elements.state.value;
    // console.log("stateUserInput", stateUserInput); 
   
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stateUserInput === `fulfilled`) {
                resolve(
                    iziToast.success({
                    title: `OK`,
                    message: `Fulfilled promise in ${delay}` ,
                })
                );
            } else if (stateUserInput === `rejected`) {
                reject(
                    iziToast.warning({
                    title: 'Warning',
                    message: ` Rejected promise in ${delay}`,
                })
                );
            };
        }, delay);
        form.reset();
    });
    
    promise
        .then(resv => resv)
        .catch(rej => rej)
}


