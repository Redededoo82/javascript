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
// var firstName = 'aaron';
// var age = 37;
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'head shop guy';
// isMarried = false;
// console.log(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried)

// //mutation//
// age = 'thirty seven';
// job = 'head shop operator';
// alert(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried)

// var lastName = prompt('what is his last name?');
// console.log(firstName + ' ' + lastName);

/*********************************************************************************************/

//basic operators//
// var currentYear, aaronsBirthYear, russellsBirthYear;
// currentYear = 2019;
// ageAaron = 37;
// ageRussell = 39;
// var x;

// aaronsBirthYear = currentYear - ageAaron;
// russellsBirthYear = currentYear - ageRussell;

// console.log(aaronsBirthYear);
// console.log(russellsBirthYear);
// console.log(currentYear + 2);
// console.log(currentYear - 2);
// console.log(currentYear * 2);

// //logical operators//
// var aaronOlder = ageAaron > ageRussell;
// console.log(aaronOlder);

// //type of operator//
// console.log(typeof aaronOlder);
// console.log(typeof ageRussell);
// console.log(typeof x);
// console.log(typeof "aaron is younger than russell");

/****************************************************************************************/

//operator precedence//

var now = 2019;
var yearAaron = 1982;
var adultAge = 18;

var isAdultAge = now - yearAaron >= adultAge;
// console.log(isAdultAge);

var ageAaron = now - yearAaron;
var ageRussell = 39;
var average = (ageAaron + ageRussell) / 2;
// console.log(average);

var x, y;
x = y = (3+5) * 4 - 6;
console.log(x, y);

//more operators//

// x = x * 2; 
x*=2;

console.log(x);

x+=10;
console.log(x);

x++;
console.log(x);

/****************************************************************************************************/

/*/coding challenge/*/

//store mark and johns mass and height in variables//

markHeight =2;
markMass =70;
johnHeight =6;
johnMass =100;

//calculate both their BMI's//

var markBmi = 'Mark bmi ' + markMass / (markHeight * markHeight);
var johnBmi = 'John bmi ' + johnMass / (johnHeight * johnHeight);
console.log(markBmi, johnBmi);

//create a boolean variable containing information about wether mark has a higher BMI than John.//

var isMarksBmiHigher = markBmi > johnBmi;

//print a string to the console containing the variable from step 3.//

console.log('it is ' + isMarksBmiHigher + ' that Mark has a higher bmi');
