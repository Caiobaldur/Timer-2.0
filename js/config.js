const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAdd = document.querySelector('.add')
const buttonSubtract = document.querySelector('.subtract')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonNature = document.querySelector('.nature')
const buttonRain = document.querySelector('.scloud')
const buttonRoom = document.querySelector('.room')
const buttonFire = document.querySelector('.fire')
const buttonLight = document.querySelector('.lightmodeButton')
const buttonDark = document.querySelector('.darkmodeButton')
const body = document.querySelector('body');
//Buttons Volums
const volumeRangeNature = document.getElementById('volumeRangeNature');
const volumeRangeRain = document.getElementById('volumeRangeRain');
const volumeRangeRoom = document.getElementById('volumeRangeRoom');
const volumeRangeFire = document.getElementById('volumeRangeFire');





export {
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
}