import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector(`#datetime-picker`);
const daysR = document.querySelector(`[data-days]`);
const hoursR = document.querySelector(`[data-hours]`);
const minutesR = document.querySelector(`[data-minutes]`);
const secondsR = document.querySelector(`[data-seconds]`);
const buttonStart = document.querySelector(`button[data-start]`);

buttonStart.disabled = true;
let selectedData = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let currentTime = Date.now();
    if (currentTime >= selectedDates[0]){
      Notiflix.Notify.failure('`Please choose a date in the future`');
      buttonStart.disabled = true;
    }
    else {buttonStart.disabled = false;
    selectedData = selectedDates[0];
  }
  },
};

function startTimer(){
  buttonStart.disabled = true
  
  liveTimer();


const timerId = setInterval(() => {
  liveTimer(timerId);
  
}, 1000);

}

buttonStart.addEventListener(`click`,startTimer);


function liveTimer (timerID){
  const currentTime = Date.now();
  let deltaTime = selectedData - currentTime;
  if (deltaTime <= 0){
    clearInterval(timerID)
  } else {
    convertMs(deltaTime);
    const timeLeft = convertMs(deltaTime)
     updateDataTime(timeLeft);
    
  }
  
}

function updateDataTime({days, hours, minutes, seconds}){
  daysR.textContent = `${days}`;
  hoursR.textContent = `${hours}`;
  minutesR.textContent = `${minutes}`;
  secondsR.textContent = `${seconds}`;
}

flatpickr("#datetime-picker", options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  };
  
