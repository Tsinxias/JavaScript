let age = 20

if (age == 20) {
  console.log('It\'s the same');
} else if (age < 20) {
  console.log("It's young");
} else {
  console.log("It's oldtouch")
}



switch (age) {
  case 20 :
  console.log('same');
  break;
  case (age<20) :
  console.log('young');
  break;
  case (age>20):
  console.log('old');
  break;
}
