// document is the whole file

let h1 = document.getElementsByTagName("h1");
let h1First = document.getElementById("first");

console.log(h1);
console.log(h1First);

// like css ==> to select an element!
console.log(document);
console.log(typeof document);
console.dir(document);

console.warn('You are too old') // warn things


h1First.innerText = "Hello World Bitches"; // change html directly on the website

let hamilton = document.getElementsByClassName("hamilton");

for (var i = 0; i < hamilton.length; i++) {
  hamilton[i].innerText = "YOLO RIGHT ?";
  hamilton[i].style.background = "red";
  //hamilton[i].style['background-color'] = 'red';
}

console.log(hamilton);

// let h1FirstLikeCss = document.getElementById("first"); //World
let h1FirstLikeCss = document.querySelector("#first");
// let hamiltonLikeCss = document.querySelectorAll("first"); // old
let hamiltonLikeCss = document.querySelectorAll(".first");

console.log(h1FirstLikeCss);
console.log(hamiltonLikeCss)

// 
// let newElements = document.createElement("div");
// for (var i = 0; i < newElements.length; i++) {
//   newElements[i].innerText = "Bitches";
//   newElements[i].className = 'superClass';
//   // newElements.classList.add() = 'superClass';
//   recipient.appendChild(newElements);
// }
//
// console.log(newElements);
