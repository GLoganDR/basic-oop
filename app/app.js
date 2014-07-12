var prompt = require('sync-prompt').prompt;

//var x = 3;
//console.log(x);

//var dog = {};


//dog.name = 'Danja';
//dog.age = 3;
//dog.gender = 'Bulldog';
//dog.breed = 'Male';
//dog.funny = true;
//dog.toys = ['Triceratops', 'Beaver', 'Bull', 'Square'];

//console.log(dog);

//var dog2 = {name:'sam', age:4};
//console.log(dog2);

//var userdog = {};

//var dogName = prompt('What is the name of your dog?  ');
//var dogBreed = prompt('What is the breed of your dog? ');
//var dogAge = prompt('What is the age of your dog? ');

//userdog.name = dogName;
//userdog.breed = dogBreed;
//userdog.age = dogAge;

//console.log('Your dog is ');
//console.log(userdog);

//Teacher's code//

//var name = prompt('Dog Name: ');
//var age = prompt('Dog Age: ');
//var breed = prompt('Dog Breed: ');

//var dog3 = {name:name, age:age, breed:breed};
//console.log(dog3);

var dogs = {};
var doglist = [];

var name = prompt('What is your dog\'s name? ');

while(name !== 'q'){
  doglist.name = name;
  doglist.age = prompt('What is your dog\'s age? ');
  doglist.breed = prompt('What is your dog\'s breed? ');
  doglist.push(dogs);
    name = prompt('Enter the name of your next dog or \'q\' to quit ');
}
console.log(doglist);

//Teacher's code//

var dogs = [];
var option = prompt('(d)og or (q)uit: ');
while (option !== 'q'){
  var name = prompt('Dog Name: ');
  var age = prompt('Dog Age: ');
  var breed = prompt('Dog Breed: ');

  var dog = {name:name, age:age, breed:breed};
  dogs.push(dog);

  option = prompt('(d)og or (q)uit: ');
}

console.log(dogs);
