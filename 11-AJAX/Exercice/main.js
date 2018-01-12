// Exercice fonctions des tableaux

let ajax = new XMLHttpRequest;
ajax.open("GET", "data.json", true);
ajax.send(null);

let whenDataLoaded = function() {
  let data = ajax.responseText;
  let dataObject = JSON.parse(data);
  manipulateData(dataObject); // give dataObject as "data" to other arrays
  console.log(dataObject);
  console.log(arrayA);
  console.log(arrayB);
  console.log(arrayC);
  console.log(bahrain);
  console.log('There is ' + bahrain.length + ' people in Bahrain.');
}
ajax.onload = whenDataLoaded


let randomNumberToArray = function(data){
  data = data.map(obj => {
    obj.score = Math.floor(Math.random()*1001);
  });
};


let sortArray = function(data) {
  data.sort(function(a, b) {
    return a.score - b.score;
  })
};


let arrayA = [];
let arrayB = [];
let arrayC = [];

let arrayCategory = function(data) {
  data.forEach(function(obj) {
    if(obj.score > 750) {
      arrayA.push(obj);
    } else if (obj.score >= 500) {
      arrayB.push(obj);
    } else {
      arrayC.push(obj);
    }
  });
};


let bahrain = [];

let arrayFilter = function(data) {
  bahrain = data.filter(obj => obj.country == "Bahrain");
};


let biggestScore = function(data) {
  let sorting = data.sort(function(a , b) {
    return a.score - b.score;
  });
  console.log(sorting[data.length-1]);
};

/*or
let biggestScore = function(data) {
  let sorting = data.sort(function(a , b) {
    return a.score + b.score;
  });
  console.log(sorting[0]);
};
*/

let smallestScore = function(data) {
  let sorting = data.sort(function(a , b) {
    return a.score - b.score;
  });
  console.log(sorting[0]);
};


let display = function(data) {
  let body = document.querySelector("body");

  let htmlBahrain = document.createElement("p");
  htmlBahrain.innerText = bahrain.length;

  let bigScore = document.createElement("p");
  bigScore.innerText = data[data.length-1].score;

  let smallScore = document.createElement("p");
  smallScore.innerText = data[0].score;

  body.appendChild(htmlBahrain);
  body.appendChild(bigScore);
  body.appendChild(smallScore);
}


let manipulateData = function(data) {
  randomNumberToArray(data);
  sortArray(data);
  arrayCategory(data);
  arrayFilter(data);
  biggestScore(data);
  smallestScore(data);
  display(data);
};






// let scoring = document.createElement("score");
// let people = dataObject.score;
// people.appendChild(scoring);
// array.map(randomize());
// console.log(dataObject.score);
// console.log(people);
