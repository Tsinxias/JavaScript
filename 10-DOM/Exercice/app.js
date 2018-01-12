
//Exo 1 Manipulation de classes

let body = document.querySelector("body")
body.classList.remove("bg-aqua");
body.classList.add("bg-olive");

let firstPara = document.getElementById("first-paragraph");
firstPara.classList.remove("bg-lime", "gray");
firstPara.classList.add("aqua");

let silver = document.getElementsByClassName("bg-silver");
for (var i = 0; i < silver.length; i++) {
  silver[i].classList.add("bg-teal");
  silver[i].classList.remove("bg-silver");
}

let blockquote = document.getElementsByTagName("blockquote");
for (var i = 0; i < blockquote.length; i++) {
  blockquote[i].classList.add("bg-white");
}


//Exo 2 : Sélecteur css

let table = document.querySelector("#my-table");
// for (var i = 0; i < table; i++) {
//   table[i].classList.add("bg-purple");
// }
table.classList.add("bg-purple")

let container = document.querySelectorAll(".container > p");
//To select the p element with class container
for (var i = 0; i < container.length; i++) {
  container[i].classList.add("shadow");
}

//Exo 3

let pre = document.getElementsByTagName("pre");
for (var i = 0; i < pre.length; i++) {
  pre[i].style.color = ("blue");
  pre[i].style.backgroundColor = ("green");
  pre[i].style.borderTop = ("3px solid red")
  pre[i].style.borderBottom = ("3px solid red")
}

let h3First = document.getElementsByTagName("h3")[0];
h3First.innerHTML = "<em>Itelic title! yeah !</em>";

let h2First = document.getElementsByTagName("h2")[0];
h2First.innerText = "<strong>HTML doens't work !</strong>";
h2First.style.color = ("red")


//Exo 4 : Création d'éléments

let ulFirst = document.getElementsByTagName("ul")[0];

let li = document.createElement("li");
li.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a> dans le 'li'"
ulFirst.appendChild(li);

let link = li.querySelector("a");
// don't use li.document.querySelector("a") because li is a child of document so it doesn't work
link.style.color = ("red");


//Exo 5 : Création et suppression de plusieurs éléments

let olFirst = document.getElementsByTagName("ol")[0];
let olChildren = olFirst.children; //get olFirst's children

for (var i = (olChildren.length -1); i >= 0; i--) {
  olFirst.removeChild(olChildren[i]);
}

let tab = ["Silent Teacher","Code Monkey", "CodeCombat"];

for (var i = (tab.length-1); i >= 0; i--) {
  let newLi = document.createElement("li");
    newLi.innerText = tab[i];
    olFirst.appendChild(newLi);
}
