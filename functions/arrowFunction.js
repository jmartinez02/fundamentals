
//Normal way
function coffee(){
    console.log("I always need coffee");
}

coffee();

//Fat Arrow Function
let coffee = () => {
    console.log("Coffee is Great!");
}

coffee();

//   Or One-line fat arrow function also known as Concise fat arrow function

var cat = () => console.log("I like cats");

cat();

let name = (firstName) => console.log(`${firstName} is my name`)

name ("mel or whatever");

// For Concise Fat Arrow Functions, returns are implied


/********************************************
 * 
 * RETURNS
 * 
 *********************************************/

 function captializeName(name){
     let capName = "";
     for (let h in name){
         if (h == 0){
             capName += name[h].toUpperCase();
         } else {
             capName += name[h].toLowerCase();
         }
     }
     console.log(capName)
    return capName
 }
 const newName = captializeName("auTumn");

 console.log( newName + "how are you?");


 /*******
  * Challenge:
  * make a tip calculator using a function
  * have it return the value
  * captrue that returned value in a variable
  * print that variable
  */
 
function tipCalc(bill) {
    tip = (bill * 0.2)
    return tip.toFixed(2)
}

let totalTip = tipCalc(20.00)
console.log(totalTip) 



