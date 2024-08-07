// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const formSubmit = document.querySelector(".form");


formSubmit.addEventListener("submit", delayUser);

function delayUser(event) {
    event.preventDefault();
    const form = event.target;
    const delay = form.elements.delay.value;
    // console.log("delay", delay)
    const stateUserInput = form.elements.state.value;
    // console.log("stateUserInput", stateUserInput); 
   
    const promise = new Promise((resolve, reject) => {
        if (stateUserInput === `fulfilled`) {
            resolve(delay);  //  аргумент який передається в then(res)
        } else {
            reject(delay)  //  аргумент який передається в then(rej)
        }
        form.reset();
    });
    
    promise
        .then(res => setTimeout(() => {
            iziToast.success({
                        title: `OK`,
                        message: `Fulfilled promise in ${res}`,
                    })
        }, res))
        .catch(rej => setTimeout(() => {
            iziToast.warning({
                        title: 'Warning',
                        message: ` Rejected promise in ${rej}`,
                    })
        }, rej))
    
// console.log(promise);  //  перевірка промісу
}



