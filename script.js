// console.log("hey");

// //variables and datatypes//

// var firstName = 'aaron';

// var lastName = 'marcks';

// var age = 37;

// var fullAge = true;
// console.log(firstName, lastName, age, fullAge);

// var job;

// job = 'head shop';
// console.log('works at a ' + job);

//breaking rules//

// var 3years = 3;
// var aaron/marcks = 'aaron marcks';
// var function = "aaron";
// var if = 'aaron';

/***********************************************************************************/

//variable mutation and type coercion//

//coercion//
var firstName = 'aaron';
var age = 37;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'head shop guy';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried)

//mutation//
age = 'thirty seven';
job = 'head shop operator';
alert(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried)

var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);