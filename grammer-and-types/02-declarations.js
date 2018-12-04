console.log('Hello World')

//cmd ? highlighted : comment out
/* ghaghing
asdf
asdf*/
//console.log is a great tool to debug later down the line. For now we're going to use it as leadgable

var a = 1;
var A = 2;

console.log(A)

var b = 1;
var b = 2;
console.log(b)
//give you the latest/ you can keep changing it

let c = 3;
c = 4;
console.log(c)

var firstName = 'Dave';
const lastName = 'Mart';
console.log(firstName,lastName)
firstName = 'Luke';
lastName = 'Jackson';
console.log(firstName,LastName)
//won't change bc of const

/*
Declarations are the LEFT SIDE of a variable
    It is simply the var x
    It is on the left side of the assignment operator (=)

Initialization are the RIGHT SIDE of variable
    It sets the value of the variable
    It incorporates the variable name(x), the assignment operator (=), and the value (10) => x = 10 
*/

var x
console.log ('Declaration', x);//exists but no value

var x= 10
console.log('Initialization 1:', x);//exists and is this value

var y = "Hello"
console.log('Both:',x,y)

