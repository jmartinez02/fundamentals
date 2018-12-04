//Booleans
//What is a boolean?
var on = true;
console.log(on); //true
let off = false;
console.log(off);//false

//boolean can represent: true/false, yes/no, on/off

//Null = empty value (not 0; not undefined)
var empty = null;
console.log(empty); //null (worst example)

/*
We've talked before about how every variable is basically a storage container in JavaScript
think of variables with null and underfined as packages coming out UPS
null packages are packages that were intentionally packed up with nothing, but have been assembled
undefined packages are packages that have nothing in them, but have not yet been assembled to leave UPS
*/

//Numbers
var degrees = 90;
console.log(degrees);

var precise = 999999999999999; //15 9's
console.log(precise);

var rounded = 9999999999999999; //(One more 9)
console.log(rounded); //10000000000000

var notQuite = 0.2 + 0.1;
console.log(notQuite); //0.300000000004

var numberAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); //0.3

let stringOne = "double quotes";
let stringTwo = 'single qoutes';
console.log(stringOne, stringTwo); // double quotes single quotes

// Numbers vs. Strings
let first = 1050 + 100; //1150
let second = '1050' + '100';

console.log(first);
console.log(second);
console.log(typeof first);
console.log(typeof second);

/*
addition vs concatentation

When JS sees combining tow or more number,s it adds the values together using the built-in 
marth functionality; when it sees adding together one or more strings, it changes and the plus
sign becomes an assignment operator--it smashes the values together without trying to 
synthesize the value
*/

let third = 1050 + '100';

console.log(third); //1050100
console.log(typeof third); // string




var firstName = ' Jaime';
var lastName = ' Martinez';
var houseNumber = 1404;
var street = " First Street";
var city = ' Frankfort';
var state = ' Indiana';
var zipcode = 46041;

console.log(houseNumber + street + city + state + " " + zipcode);


// Objects
/*
What is an object?

A container that can hold multiple datatypes

Denoted by {}
Has keys and values (color (key): 'blue (value)), separated with a colon
Each key separated with a comma
*/
let burritosNow = {
    size: 'Large',
    quantity: 4,
    now: true
};
console.log(burritosNow);
console.log(typeof burritosNow); //object

/*
Arrays are great for lists

Denoted by []
Has values ('blue', 'green', 'yellow'), seperated with commas
*/
/*
var burritos = ['large', 4, true];
console.log(burritos); //['large, 4, true]

console.log(typeof burritos); //OBJECT
*/