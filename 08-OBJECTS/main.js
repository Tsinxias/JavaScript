
let object = {}; //JSON
//Objects are used to have mixed type of values, ex: number, boolean, function, etc...
//Arrays are mainly same type of values

let plein = {
  //xx : tatata ==>
  'number' : 13,
  'myString' : "lol",
  'arrays' : [13, 'la', 15],
  'sayYolo': function(){
    console.log('yolo');
  },
  'boolean' : true
}

console.log(plein)
console.log(plein.number);
console.log(plein['number']);
console.log(plein.sayYolo());

console.log('For statement for objects')
for (properties in plein) {
  console.log(plein[properties])
  console.log(plein[properties]);
}

//compared to arrays, it's more defined => 13 c'est number
// let plein = [
//   13,
//   "lol",
//   [13, 'la', 15],
//   function(){
//     console.log('yolo');
//   },
//   true
// ]
