import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonSubtract,
  minutesDisplay,
  secondsDisplay,
  buttonNature,
  buttonRain,
  buttonFire,
  buttonRoom,
  buttonLight,
  buttonDark,
  body,
  volumeRangeFire,
  volumeRangeNature,
  volumeRangeRain,
  volumeRangeRoom,
} from "./config.js"

import Sound from "./sounds.js"

const sound = Sound()

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut 



buttonLight.addEventListener ('click', () => {
  buttonLight.classList.add('modeOff')
  buttonDark.classList.remove('modeOff')
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
  buttonPlay.classList.remove('button-check')
  buttonPause.classList.remove('button-check')
  buttonStop.classList.remove('button-check')
  buttonAdd.classList.remove('button-check')
  buttonSubtract.classList.remove('button-check')
})

buttonDark.addEventListener ('click', () => {
  buttonLight.classList.remove('modeOff')
  buttonDark.classList.add('modeOff')
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
  buttonPlay.classList.add('button-check')
  buttonPause.classList.add('button-check')
  buttonStop.classList.add('button-check')
  buttonAdd.classList.add('button-check')
  buttonSubtract.classList.add('button-check')
})

//Button Clicks

buttonPlay.addEventListener ('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  countdown()
  sound.pressButton()
})

buttonPause.addEventListener ('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
  sound.pressButton()
})

buttonStop.addEventListener ('click', () => {
  resetControls()
  clearTimeout(timerTimeOut)
  resetTimer()
  sound.pressButton()
})

buttonAdd.addEventListener ('click', () => {
let minutes = Number(minutesDisplay.textContent)
  minutes += 5;
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  sound.pressButton()
})


buttonSubtract.addEventListener ('click', () => {
  let minutes = Number(minutesDisplay.textContent);
  if (minutes > 5) {
    minutes -= 5;
  } else {
    minutes = 5;
  }
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  sound.pressButton()
});

//Buttons Sounds
const forestSound = new Audio("/sounds/Floresta.wav");
const rainSound = new Audio("/sounds/Chuva.wav");
const roomSound = new Audio("/sounds/Cafeteria.wav");
const fireSound = new Audio("/sounds/Lareira.wav");

//Buttons Volums
const volumeRange = document.getElementById('volumeRange');

// Função para atualizar o volume do som
function updateVolume(volume, sound) {
  if (sound !== null) {
    sound.volume = volume / 200;
  }
}

let currentButton = null;
let currentSound = null;


function playSound(sound, button) {
  if (currentSound === sound) {
    sound.pause();
    currentButton.classList.remove('button-check');
    currentButton = null;
    currentSound = null;
  } else {
    if (currentSound !== null) {
      currentSound.pause();
      currentButton.classList.remove('button-check');
    }
    sound.play();
    button.classList.add('button-check');
    currentButton = button;
    currentSound = sound;
  }
  
  sound.loop = true;
}

buttonNature.addEventListener('click', () => {
  playSound(forestSound, buttonNature);
  
});

buttonRain.addEventListener('click', () => {
  playSound(rainSound, buttonRain);
  
});

buttonRoom.addEventListener('click', () => {
  playSound(roomSound, buttonRoom);
});

buttonFire.addEventListener('click', () => {
  playSound(fireSound, buttonFire);
});

//Volume
volumeRangeNature.addEventListener('input', function() {
  const volume = volumeRangeNature.value;
  updateVolume(volume, forestSound);
});

volumeRangeRain.addEventListener('input', function() {
  const volume = volumeRangeRain.value;
  updateVolume(volume, rainSound);
});

volumeRangeRoom.addEventListener('input', function() {
  const volume = volumeRangeRoom.value;
  updateVolume(volume, roomSound);
});

volumeRangeFire.addEventListener('input', function() {
  const volume = volumeRangeFire.value;
  updateVolume(volume, fireSound);
});

volumeRange.addEventListener('input', function() {
  const volume = volumeRange.value;
  updateVolume(volume);
});




// Reset
function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function resetTimer() {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = "00"
  
  clearTimeout(timerTimeOut)
}


// Timer machine
function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0
     
    secondsDisplay.textContent = "00"

    if(isFinished) {
      resetControls()
      resetTimer()
      Sound().timeEnd()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }
    
    
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    
    countdown()
  }, 1000)
}

//Button Clicks

buttonPlay.addEventListener ('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  countdown()
  sound.pressButton()
})

buttonPause.addEventListener ('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
  sound.pressButton()
})

buttonStop.addEventListener ('click', () => {
  resetControls()
  clearTimeout(timerTimeOut)
  resetTimer()
  sound.pressButton()
})

