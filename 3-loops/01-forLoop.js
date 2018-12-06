for(var i = 0; i < 10; i++){
    console.log(i);
}

// Challenge: using a for loop, count to 20,by 2's

for(var i = 2; i < 21; i +=2){
    console.log(i);
}

// Challenge: using a for loop, count form 10 to 0, going down by 1's

for(var i = 10; i > 0; i-=1){
    console.log(i);
}

// Challenge: using a for loop, count from 0, going down by 2's to -24

for(var i = 0; i > -26; i-=2){
    console.log(i);
}

// Challenge: using a for loop, go through a name and display each letter individually
// Hint: string indexing

let myName = "jim";

let nameLength = myName.length;

for (i =0; i < nameLength; i++){
    console.log(myName.charAt(i));
}

// or

let name = "brandon";
let arrayName = name.split('');

for(i = 0; i < arrayName.length; i++){
    console.log(arryName[i])
}

//or

var anotherName ="alecx";

for(let i = 0; i < anotherName.length; i++){
    console.log(anotherName[i]);
}

/*
Challenge:
Make a for loop where you add up all the numbers from 1 to 50
(should equal 1275)
Hint:: Remember that variables in the global scope can be
accessed from local scopes
*/

let sum = 0;

for(i = 1; i <= 50; i++){
   sum += i;
    
}
console.log(sum)