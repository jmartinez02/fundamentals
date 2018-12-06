let student = { name: "Jaime", awesome: true, course: //name is the key and jaime is value
"JavaScript"};

for(item in student){
    console.log(item); //key
    console.log(student[item]);
}

let catArray = ['tabby', 'burmese', 'ragdoll', 'tortie'];
for(cat in catArray){
    console.log(cat);
}


/*
Challenge:
Write a for in loop that capitalizes the first letter of a student's name
*/

var name = "dave";
var capName;

for(var letter in name){
    if(letter == 0){
        capName = name[letter].toUpperCase();
    } else {
        capName += name[letter];
    }
}

console.log(capName);


function fizzBuzz(){
    for (var i = 0; i <= 100; i++){
        if (i % 15 == 0) {
            console.log('fizzbuzz');

        }
        else if ( i % 3 == 0){
            console.log('fizz')
        }
        else if (i % 5 == 0){
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz();