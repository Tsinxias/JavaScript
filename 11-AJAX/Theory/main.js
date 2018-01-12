/*
Asyncronous ==> Code that shows affter
JavaScript
And
xml
*/


for (var i = 3; i > 0 ; i--) {
  console.log(i);
}

let a = 0;
let myFunction  = function() {
  a++
  console.log("Hello World " + a)
}

/*
//log functions after some time
setTimeout(myFunction, 3000); // miliseconds
setInterval(myFunction, 3000); // Appear multiple times (it is endless);
console.log("I'm coming after");
*/

// Ajax gets data from another server. Do this on Firefox
// This will require some time so that's why we use functions to wait

// create a newinstance of XMLHttpRequest
// let ajax = new XMLHttpRequest();
// // the action the we will do when the request is finshed
//
// ajax.onload = function(data) {
//   console.log(data);
//   console.log(ajax);
// }
// // the type, the url, asynchronous ?
//
// ajax.open("get", "text.txt", true);
// ajax.send();
//
// console.log(ajax);
let myVar = "Hello";
let empty= null;

// create a new instance of XMLHttpRequest
let ajax = new XMLHttpRequest();
    // the action the we will do when the request is finshed

    ajax.onload = function(){
      let dataText = ajax.responseText;
      let dataObject = JSON.parse(dataText);
      console.log(dataText);
      console.log(dataObject);
      console.log(dataObject.name);
      empty = dataObject;

      console.log(myVar);
    }

    console.log(empty);

    // the type, the url, asynchronous ?
    ajax.open("GET", "myData.json", true);
    // ajax.open("GET", "text.txt", true);
    // ajax.open("GET", "myData.xml", true);


    // send the request
    ajax.send(null);


     let whenDataLoaded = function(){
      let dataText = ajax.responseText;
      let dataObject = JSON.parse(dataText);
      manipulateData(whenDataLoaded);
    }

    ajax.onload = whenDataLoaded;

    ajax.open("GET", "myData.json", true);
    // ajax.open("GET", "text.txt", true);
    // ajax.open("GET", "myData.xml", true);

    // sed the request
    ajax.send(null);

    let manipulateData = function(data) {
      for (var i = 0; i < data.children.length; i++) {
        data.children = data.children[i]+ " Hello";
      }
      displayChildren();
    }

    let displayChildren = function(data) {
      for (var i = 0; i < data.children.length; i++) {
        let recipient = document.getElementById("recipient");
        let elemejnt = document.createElement("div");
        element.innerHTML = data.children[i];
        recipient.appendChild(element);
      }
      makeItPretty();
    }

    let makeItPretty = function() {
      let divs = document.getElementsByTagName("div");
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.background = "red";
      }
    }



/* Teddy Code

/*
Asyncronous
JavaScript
And
xml
*/
/*
for (var i = 3; i > 0; i--) {
  console.log(i)
}
let a = 0;
let myFunction = function(){
  a++;
  console.log("Hello world " + a);
}
setTimeout(myFunction, 3000); // one time miliseconds
setInterval(myFunction, 1000); // multiple times
console.log("i'm coming after");
*/
/*
let myVar = "hello";
// create a new instance of XMLHttpRequest
let ajax = new XMLHttpRequest();
    // the action the we will do when the request is finshed
    let whenDataLoaded = function(){
      let dataText = ajax.responseText;
      let dataObject = JSON.parse(dataText);
      manipulateData(dataObject);
    }
    ajax.onload = whenDataLoaded;
    // the type, the url, asynchronous ?
    ajax.open("GET", "mydata.json", true);
    // sed the request
    ajax.send(null);

    let manipulateData = function(data){
      data.age = 1200;
      for (var i = 0; i < data.children.length; i++) {
        data.children[i] = data.children[i] +  " hello";
      }
      displayChidren(data);
    }

    let displayChidren = function(data){
      for (var i = 0; i < data.children.length; i++) {
        let recipient = document.getElementById("recipient");
        let element = document.createElement("div");
        element.innerHTML = data.children[i];
        recipient.appendChild(element);
      }
      makeItPretty();
    }

    let makeItPretty = function(){
      let divs = document.getElementsByTagName("div");
      for(let i =0; i<divs.length; i++){
        divs[i].style.background = "red";
      }
    }
*/
