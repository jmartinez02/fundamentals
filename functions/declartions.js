/************************************ */
// Functions (Folder)
// - declartions.js

// Functions are a set of statements that perform a task or calculates a value

// Declarations

function hi(){
    console.log("HI!")
}

// Experession

var hi = function hi(){
    console.log("I already said hi!")
}

// Declarations == Hoisted
// Expressions (not) != Hoisted

// Function Calling

hi();
hi();
hi();

function hey(){
    console.log('Dave, tell cooper I said hey')
}

hey(); // will work

console.log(hey()) //will not work trying to call function!!!!!!!!!

//Challenge : Create a function that, when invoked, lists our the number 1 through 10

/*
function number(){
    console.log[1,2,3,4,5,6,7,8,9,10]      //Fail!!!
}

function ([0]);
*/  


function countByHand(){
    console.log(1);
    console.log(2);
    console.log(3);
}
countByHand();


function printNumbers(){
    for (let i = 1;i<11;i++){
        console.log(i)
    }
}
printNumbers();


/**Challenge: Given an array, creat a function that lists out the individual values */

let arr = ["This", "Is", "Really", "Cool"]

function arrayList(){
    for(list in arr){
        console.log(arr[list]);
    }
}
arrayList();

