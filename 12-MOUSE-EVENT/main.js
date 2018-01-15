
//Exercice 1

let hoverMe = document.getElementsByClassName('hoverMe');

for (var i = 0; i < hoverMe.length; i++) {
  hoverMe[i].addEventListener ('mouseover', function(event) {
    this.style.visibility = "hidden";
    // setTimeout(event.target, 1000);
  });
};


//Exercice 2

let reset = document.getElementById('reset');

reset.addEventListener('click', function(event) {
  for (var i = 0; i < hoverMe.length; i++) {
    hoverMe[i].style.visibility = "visible";
  };
}, false)


//Exercice 3

let body = document.getElementsByTagName('body');

let xAxis = document.getElementById('x-axis');
let yAxis = document.getElementById('y-axis');

for (var i = 0; i < body.length; i++) {
  body[i].addEventListener('mousemove', function(event) {
    let xElement = event.clientX;
    let yElement = event.clientY;
    xAxis.innerText = 'Mouse position x = ' + xElement;
    yAxis.innerText = 'Mouse position y = ' + yElement;
  }, false)
};
