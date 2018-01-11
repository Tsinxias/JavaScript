function sayHello() {
  return 'Hello world';
}
// first read all code and then do the declaration (appel)
// => si on le met avant la création de la fonction, ça fonctionne quand même ! o.O

let sayBye = function(times) {
  for (let i = 0; i <= times; i++) {
    console.log('Bye world' + i);
  }
  return 'Bye world is finished';
}

let sayHein = () => {
  return 'Hein World';
}

console.log(sayHello());
console.log(sayHein());
console.log(sayBye(5));


function hello(bouh = 'Charlie'/*défault*/) {
  return bouh;
}

console.log(hello("Carla"));



// Fonction Réversif
//This is when you call the declared function inside itself

let count = 0;

let increase = function () {
  count++; //or count +=1 or count = count + 1
  console.log(count);
  if (count < 10) {
    increase();
  }

  // while (count <10) {
  //   count++
  // }
}

increase ();

console.log(count);
