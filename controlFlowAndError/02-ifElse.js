let weather = 75;

if (weather < 70){
    console.log('Wear a jacket')
} else {
    console.log('No jacket necessary!')
};


let name = 'Jaime';

if (name == 'Jaime'){
    console.log('Hello, my name is Jaime')
} else {
    console.log('Hello, what is your name?')
};



//Capitalize the first letter of the only

let name = 'tyleR';

if (name[0] == name[0].toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase()
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters);
}

/**************************************************************************************** */

//Else If

let age = 30;

if age = (age >=25){

    console.log("Yay! You can rent a car!");

}else if(age >= 21){

    console.log("Yay! You can drink!");

}else if(age >= 18){
    console.log("Yay! You can vote!");

} else {
    console.log("Sorry, you're too young to do anything fun.");
} 


var fb = 15;

if (fb % 3 === 0 && fb % 5 === 0) {
    console.log ('fizz buzz');

}else if (fb % 5 === 0){
    console.log('buzz');

}else if (fb % 3 === 0) {
    console.log('fizz');
}

let stringexample = 'string';
let boolexample = true;
let conditionexample = 0;

if (typeof conditionExample === 'string'){
    console.log('Yep, A is A.')
}else if (typeof conditionExample === 'number') {
    console.log('numbers are cool.')
}else if (typeof condtionExample === 'boonean'){
    console.log('turthiness')
}



/************************************ 
 *
 * SWITCH
 * Switch statements help us choose betwwen serval option for a variable and a default
 * Four main parts to a switch statement
 * switch, the argument being evaluated
 * case, one of the options for the variable to be
 * break, this breaks us out of the switch statement once we hit our case
 * default, the default if we dont hit one of our cases, not neccesary
 * 
 * 
 * ************************************************/