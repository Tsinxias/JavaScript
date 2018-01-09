// let groceries = array(10);

let groceries =[
  'apples', //0
  'oranges', //1
  'raspberries'//2
];

groceries[3] = 'brocolis';
groceries.shift(); //removes apple which was in the first position
groceries.unshift('cucumbers');//add first position
groceries.push('tomatoes', 'strawberries');//add last position
groceries.pop(); //remove the last position

groceries.splice(1, 0, 'something'); //after the 1 position, you remove 0 thing & add 'something'
console.log(groceries.slice(1,4)); //cut the arrays to what you want /!\ 1-4 sans le 4 compris

console.log(groceries);
console.log(groceries[0]);
console.log(groceries[1]);
console.log(groceries[2]);

for (let i = 0; i < groceries.length; i++) {
  console.log(groceries[i]+ ' ' + i);
};

groceries.forEach(function(item) {
  console.log(item + ' function');
});

groceries.forEach(fruits => console.log(fruits + ' arrow method'));

// let copyGroceries = groceries.slice(); //without .slice(), the changes are made on the 2 arrays instead of one
let copyGroceries = [...groceries];

copyGroceries.unshift('Hello');

copyGroceries.reverse(); //reverse the arrays

copyGroceries.map(item => {
  return item + ' yum';
});

console.log(copyGroceries);
console.log(groceries);
