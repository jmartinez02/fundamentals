//Parameters are like empty storage boxes we can name whatever we want. They need to use the same
//name inside of the function.

//We can also have multiple different parameters for a single function. We provide the parameter
//when we call our function

function pet(animal){
    console.log(`I have a ${animal} for a pet`)
}

pet("dog");
pet("cat");


function food(apple){
    console.log(`I like ${apple} for lunch`)
}

food("pizza");

function pet2(animal, owner){
    console.log(`${owner} has a ${animal} for a pet`)
}

pet2("dog", "Autmn");
pet2("cat", "Alecx");
pet2("occelot", "Dave");

function name(firstName, lastName){
    console.log(`Hello, my name is ${firstName} ${lastName}`)
}
name("Tom", "McClellan");

//or
function myName(first, last){
    let fullName = first + ' ' + last;
    console.log(`Hello my name ${fullName}.`)
}

myName("Autumn", "Henderson");