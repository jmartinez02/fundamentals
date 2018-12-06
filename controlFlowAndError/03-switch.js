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


 var friend="Dave";

 switch (friend) {
     case "Autmn":
     console.log("Hey Autmn, when are you going rock climbing?");
     break;
     case "Dave":
     console.log("Hey Dave, how is Cooper?");
     break;
     case "Alecx":
     console.log("Hey Alecx, when are we playing Dnd?");
     break;
     default:
     console.log(`I'm sorry, ${friend}, but do I know you?`);
 }



 var food="hamburger";

 switch (food) {
     case "hotdog":
     console.log("It's good");
     break;
     case "pizza":
     console.log("Yummy");
     break;
     case "cereal":
     console.log("yum yum")
     break;
     default:
     console.log(`That's gross`);

 }

 //Switches with multiple conditions:

 var yep = -8;

 switch (true){
     case (yep < 0 && yep > -10):
     console.log('worked');
     break;
     case (yep > 0):
     console.log('worked!');
     break;
     default:
     console.log('didnt work');
 }


 //****************************************************** */
                    // Ternary
//************************************************************ */
//  What is a ternary? A great way to write a single line for an if/ if else statement

let x = 6;

(x>0) ? console.log("yes") : console.log("no")

//compared to if

if (x == 0) {
    console.log("hello");

} else if (x < 0) {
    console.log("hi");

}else{
    console.log("goodbye");
} 

(x == 0) ? console.log("hello") : (x < 0) ? console.log("hi") : console.log("goodbye")

//this is a ternary
let age = 30;
(age >= 25) ? console.log("Yay! You can rent a car!") : (age >= 21) ? console.log("Yay! You can drink!") : (age >= 18) ? console.log("Yay! You can vote") : console.log("Sorry, you're too young to do anything fun.");