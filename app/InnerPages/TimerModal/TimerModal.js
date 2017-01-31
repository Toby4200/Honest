console.log('==> Hi froml TimerModal');

const ipc = require('electron').ipcRenderer

const asyncMsgBtn = document.querySelector('.setTimer');
let TimerData = {};



console.log('asyncMsgBtn ==>', asyncMsgBtn)
console.log('ipc ==>', ipc)

asyncMsgBtn.addEventListener('click', function () {
  const time = Number(document.querySelector('.time').value);
  const taskName = document.querySelector('.taskName').value;

  TimerData = {
    time,
    taskName
  };

  console.log('TimerData ==>', TimerData)

  ipc.send('asynchronous-message', TimerData)
})

ipc.on('asynchronous-reply', function (event, arg) {
  console.log('==> asynchronous-reply');
  const message = `Timer is set with this data: time is ${arg.time} | TaskName is ${arg.taskName} `
  document.querySelector('.async-reply').innerHTML = message
})
