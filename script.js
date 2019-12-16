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

// var now = 2019;
// var yearAaron = 1982;
// var adultAge = 18;

// var isAdultAge = now - yearAaron >= adultAge;
// // console.log(isAdultAge);

// var ageAaron = now - yearAaron;
// var ageRussell = 39;
// var average = (ageAaron + ageRussell) / 2;
// // console.log(average);

// var x, y;
// x = y = (3+5) * 4 - 6;
// console.log(x, y);

// //more operators//

// // x = x * 2; 
// x*=2;

// console.log(x);

// x+=10;
// console.log(x);

// x++;
// console.log(x);

/****************************************************************************************************/

/*/coding challenge/*/

//store mark and johns mass and height in variables//

// markHeight =6;
// markMass =70;
// johnHeight =6;
// johnMass =100;

// //calculate both their BMI's//

// var markBmi =  markMass / (markHeight * markHeight);
// var johnBmi =  johnMass / (johnHeight * johnHeight);
// console.log(markBmi, johnBmi);

// //create a boolean variable containing information about wether mark has a higher BMI than John.//

// if( markBmi > johnBmi){
//     console.log('marks bmi is higher than johns')
// }else{console.log('johns is higher')};

//print a string to the console containing the variable from step 3.//




/*******************************************************************************************************************************/

//if else statements//

// var firstName = 'aaron';
// var civilStatus = 'horribly divorced again';

// if (civilStatus === 'married'){
//     console.log(firstName + ' is married');
// }else(console.log(firstName + ' is not married'));

// var isMarried = false;
// if(isMarried){
//     console.log('congrats');
// }else(console.log('its not worth it'))

/******************************************************************************************************************************8 */

//boolean logic//


// var age = 57;

// if(age <= 13){
//     console.log(firstName + ' is a boy');
// }else if(age  > 13 && age < 20){
//     console.log(firstName + ' is a teenager');
// }else{console.log(firstName + ' is a man')};

// console.log({} + []);

/****************************************************************************************************************************************/

//ternary operator and switch statements//

// var firstName = 'aaron';
// var age = 37;

// age >= 21 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

// var drink = age>=21 ? 'beer' : 'juice';
// console.log(drink);

// //switch statement//

// var job = 'tranny';
// switch(job){
//     case 'head shop operator': console.log(firstName + ' sells bongs');
//     break;
//     case 'web developer': console.log(firstName +' develops websites');
//     break;
//     case 'tranny': console.log(firstName +' is a tranny')
//     break;
//     default: console.log('does nothing');
// }

/**************************************************************************************************************************************/

//truthy falsy values and equality operators//
//falsy values :  undefined, null, 0, '', NaN
//truthy values : all non falsy values

// var height;
// height = 55;
// if (height){
//     console.log('variable is defined')
// }else{
//     console.log('variable is not defined')
// }

/******************************************************************************************************************************** */

//functions//
// var firstName;
// firstName = 'aaron', 'russell', 'keith';

// function calculateAge(birthYear) {
//     return 2019 - birthYear;
// }

// var ageAaron = calculateAge(1982);
// var ageRussell = calculateAge(1980);
// var ageKeith = calculateAge(1984);
// console.log(ageAaron, ageRussell, ageKeith);

// function yearsUntilRetirement(birthYear, firstName) {
//     var age = calculateAge(birthYear);
//     var retirement = 65 - age;
//     console.log(firstName + ' retires in ' + retirement + ' years');
// }

// yearsUntilRetirement(1982, 'aaron');
// yearsUntilRetirement(1980, 'russell');
// yearsUntilRetirement(1984, 'keith');

/************************************************************************************************* */

//function statements and expressions//

// var whatDoYouDo = function (job, firstName) {
//     switch(job){
//         case 'head shop operator':
//             return firstName + ' sells bongs';
//         case 'wizard':
//             return firstName + ' casts spells'
//         case 'liberal fruitcake':
//             return firstName + ' crams beliefs down throats'
//         default: 
//         return firstName + ' does something else'
//     }
// }
// console.log(whatDoYouDo('wizard', 'russell'));
// console.log(whatDoYouDo('head shop operator', 'aaron'));

/**************************************************************************************************************************** */

//arrays//

// var names = ['aaron', 'russell', 'keith'];
// var years = new Array(1982, 1980, 1984);

// names[3] = 'scott';
// years[3] = 1989

// console.log(names);
// console.log(years);
// console.log(names.length);

/******************************************************************************************************************************** */

//coding challenge 3 (i skipped 2 for some reason)//

function calculateTip(billAmount) {
    var percentage;
    if (billAmount < 50) {
        percentage = .2;
    } else if (billAmount >= 50 && billAmount < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    };
    return percentage * billAmount;
};

// console.log(calculateTip(120));

var bills = [124, 48, 268];
var tips = [
    calculateTip(bills[0]),
    calculateTip(bills[1]),
    calculateTip(bills[2]),
];

var finalValues = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
]
// console.log(tips, finalValues);
function displayInfo() {
    console.log(bills, tips, finalValues);
}
/******************************************************************************************************************* */

//objects and properties//

// var aaron = {
//     firstName:'aaron',
//     lastName: 'marcks',
//     birthYear: 1982,
//     family:['russell', 'keith', 'scott'],
//     job: 'head shop operator',
//     isMarried: false
// };
// // console.log(aaron.family[1]);
// // console.log(aaron['lastName']);
// var x = 'birthYear';
// // console.log(aaron[x]);

// aaron.job = 'wizard';
// aaron['isMarried'] = true;
// // console.log(aaron);

// var keith = new Object();
// keith.firstName = 'keith';
// keith.birthYear = 1984;
// // console.log(keith);

/************************************************************************************************************************* */

//objects and methods//

var aaron = {
    firstName: 'aaron',
    lastName: 'marcks',
    birthYear: 1982,
    family: ['russell', 'keith', 'scott'],
    job: 'head shop operator',
    isMarried: false,
    calcAge: function () {
        return this.age = 2019 - this.birthYear;
    }
};

function ageOfAaron() {
    console.log(aaron.calcAge());

}

/*******************************************************************************************************************88 */

//coding challenge 4//

//create objects with full name, mass, and height//
//add method to each object that calculates b.m.i. Save bmi to object and return it from the method//
var mark = {
    fullName: 'mark johnson',
    height: 6.3,
    mass: 200,
    calcBmi: function () {
        return this.mass / (this.height * this.height);
    }
}

var john = {
    fullName: 'john johnston',
    height: 5.5,
    mass: 100,
    calcBmi: function () {
        return this.mass / (this.height * this.height);
    }
}
//console log who has the highest bmi
// console.log(mark.calcBmi(), john.calcBmi());
function Bmi() {

    if (mark.calcBmi() > john.calcBmi()) {
        console.log('marks bmi is higher with...' + mark.calcBmi() + ' john had ' + john.calcBmi())
    } else {
        console.log('johns bmi is higher with...' + john.calcBmi() + ' mark had ' + mark.calcBmi())
    };
}


/***************************************************************************************************************************************88 */

//loops and iteration//

// for(var i = 1; i <= 20; i ++){
//     console.log(i);
// }

// var names = ['aaron', 'russell', 'keith', 'scott'];

// for(var i = 0; i < names.length; i++){
//     console.log(names[i]);
// }


// i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

//continue and break statements//


// for(var i = 0; i < names.length; i++){
//     if (typeof names[i] !== 'string') continue;
//     console.log(names[i]);
// }
// for(var i = 0; i < names.length; i++){
//     if (typeof names[i] !== 'string') break;
//     console.log(names[i]);
// }

//how to loop through names array backwards??//
function names() {
    var names = ['aaron', 'russell', 'keith', 420, 'scott'];

    for (var i = names.length - 1; i >= 0; i--) {

        console.log(names[i]);
    }
}

/************************************************************************************************************** */

//hoisting//
// calculateAge(1982);

// function calculateAge(year) {
//     console.log(2019 - year)
// };

// // retirement(1982);
// // var retirement = function (year) {
// //     console.log(65-(2019-year))
// // };

// console.log(age);               ///undefined
// var age = 23;

// function foo() {
//     var age = 65
//     console.log(age)                ///65
// };

// foo();
// console.log(age)                    ///23

/*********************************************************************************************************************** */

//scoping chain//

var a = 'hello';
first();

function first() {
    var b = 'sup';
    second();

    function second() {
        var c = 'sah brah!';
        // console.log(a + b + c);
        // third();
    }
}

function third() {
    var d = 'hog';
    console.log(a + d);
}

/**************************************************************************************************************************** */

//this keyword//

// console.log(this);
// calculateAge(1982)

// function calculateAge(year) {
//     console.log(2019 - year);
//     console.log(this);
// }

// var aaron = {
//     name: 'aaron',
//     yearOfBirth: 1982,
//     calculateAge: function () {
//         console.log(this);
//         console.log(2019 - this.yearOfBirth);

//         // function innerFunction() {
//         //     console.log(this);
//         // }
//         // innerFunction();
//     }
// }



/********************************************************************************************************************************************* */
//Advanced Java Script//
/********************************************************************************************************************************************** */

//function constructors//


// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job
// };

// Person.prototype.calcAge =  function () {
//     console.log( 2019 - this.yearOfBirth);
// };
// Person.prototype.jobIs = function () {
//     console.log(this.job + " good luck!");
// };
// Person.prototype.lastName = 'McKringleberry'

// var aaron = new Person('aaron', 1982, 'head shop operator');
// var ninny = new Person('ninny', 2001, 'silly head');
// var jimmy = new Person('jimmy', 2002, 'silly head2');
// var snookie = new Person('snookie', 2003, 'silly head3');


//Object.create//

var personProto = {
    calcAge: function () {
        console.log(2019 - this.yearOfBirth);

    }
};

var aaron = Object.create(personProto);
aaron.name = 'aaron';
aaron.yearOfBirth = 1982;
aaron.job = 'head shop operator';

var Jane = Object.create(personProto, {
    name: { value: 'jane' },
    yearOfBirth: { value: 1988 },
    job: { value: 'nothing' }
});


//primitives vs objects//


function primVsObj(params) {
    var a = 23;
    var b = a;
    a = 55;

    console.log(a, b);

    var obj1 = { name: 'jon', age: 26 };
    var obj2 = obj1;
    obj1.age = 66;

    console.log(obj1.age, obj2.age);



//passing in a primitive data type as a paramater of a function to mutate data//

    var age = 27;
    var obj = { name: 'aaron', city: 'Austin' };


    function change(a, b) {
        a = 30;
        b.city = 'Ft.Worth';

    }
    change(age, obj);
    console.log(age, obj.city);
}
