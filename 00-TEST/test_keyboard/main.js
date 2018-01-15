
let pink = document.getElementById('pink');
let cyan = document.getElementById('cyan');
let purple = document.getElementById('purple');
let green = document.getElementById('green');

document.body.addEventListener('keydown', function(event) {
  let keys = event.keyCode;
  switch(keys) {
    case 37 :
      pink.classList.add('opacity');
      break;
    case 38 :
      cyan.classList.add('opacity');
      break;
    case 39 :
      purple.classList.add('opacity');
      break;
    case 40 :
      green.classList.add('opacity');
      break;
  };
}, false);

document.body.addEventListener('keyup', function(event) {
  let keys = event.keyCode;
  switch(keys) {
    case 37 :
      pink.classList.remove('opacity');
      break;
    case 38 :
      cyan.classList.remove('opacity');
      break;
    case 39 :
      purple.classList.remove('opacity');
      break;
    case 40 :
      green.classList.remove('opacity');
      break;
  };
}, false);


document.body.addEventListener('keypress', function(event) {
  let keys = event.keyCode;
  switch(keys) {
    case 49:
      pink.innerHTML = '<strong>W</strong>';
      break;
    case 50:
      cyan.innerHTML = '<strong>A</strong>';
      break;
    case 51:
      purple.innerHTML = '<strong>O</strong>';
      break;
    case 52 :
      green.innerHTML = '<strong>W</strong>';
      break;
    case 48 :
      pink.innerHTML = '&nbsp;'
      cyan.innerHTML = '&nbsp;'
      purple.innerHTML = '&nbsp;'
      green.innerHTML = '&nbsp;'
      break;
  }
})
