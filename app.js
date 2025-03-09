const bells = new Audio('./sounds/bell.wav');
const startBtn = document.querySelector('.btn-start');
const restBtn = document.querySelector('.btn-rest');
const workBtn = document.querySelector('.btn-work');
const longRestBtn = document.querySelector('.btn-long-rest');
const session = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let myInterval;
let state = true;
let totalSeconds; // Move this to the higher scope
const saveMin = session.textContent;
const saveSec = seconds.textContent;

const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent);

  if (state) {
    state = false;
    totalSeconds = sessionAmount * 60;

    // Store the initial values
  

    const updateSeconds = () => {
      const minuteDiv = document.querySelector('.minutes');
      const secondDiv = document.querySelector('.seconds');
      
      totalSeconds--;

      let minutesLeft = Math.floor(totalSeconds / 60);
      let secondsLeft = totalSeconds % 60;

      if (secondsLeft < 10) {
        secondDiv.textContent = '0' + secondsLeft;
      } else {
        secondDiv.textContent = secondsLeft;
      }

      minuteDiv.textContent = `${minutesLeft}`;

      if (minutesLeft === 0 && secondsLeft === 0) {
        bells.play();
        clearInterval(myInterval);
        state = true;
      }
    };

    myInterval = setInterval(updateSeconds, 1000); // Start the interval to update seconds
  } else {
    alert('Session has already started.');
  }
};

const  setForWork= () => {
session.textContent = saveMin;
seconds.textContent = saveSec;
};

const  setForRest= () => {
    session.textContent = 5;
    seconds.textContent = saveSec;
    };

const  setForLongRest= () => {
        session.textContent = 15;
        seconds.textContent = saveSec;
        };

startBtn.addEventListener('click', appTimer);
restBtn.addEventListener('click', setForRest);
workBtn.addEventListener('click', setForWork);
longRestBtn.addEventListener('click', setForLongRest);
