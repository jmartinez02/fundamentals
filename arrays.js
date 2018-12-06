/*
What is an array?
 Has [] brackets
 Can hold multiple datatypes
 Great for listing
 */

 let students =['Tony', 'Marshall', 'Randy','Ray', 23, true, ['Ryan', 'Iesha']]
 console.log(typeof students) //object
 console.log(students instanceof Array) //true
 console.log(students[2]) //Randy
 console.log(students[6][0]) //Ryan

 // Go into the nested array and get 'Iesha'
 // print out "Hello Iesha, you look nice today"
 let name = students[6][1];
 console.log(`Hello ${name} you look nice today`);

 //Example
 let food = ['Pecan pie', 'Srimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
 for(f in food) {
     console.log(food[f])
 }
 food.push('porkchop')
 for(f in food){
     console.log(food[f])           // old code and new code adding porkchop
 }
 food.splice(1,1, 'Bananas')
 for (f in food){
     console.log(food[f])
 }

 // new example

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
food.pop();
for (f in food) {

    //console.log(food[f])
}

food.forEach(f => { console.log(f);})

/*Challenge;
Create a list (with an array) of movies
Use .forEach() to list your movies
add another movie at the end
and replace one of your existing movies with another one
*/

let movies = ['Batman', 'Superman', 'Antman'];
movies.push('Wonder Woman');
movies.splice(0,1, 'Superman')
movies.forEach(f => {console.log(f)})

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.legnth)


let colors = ['blue','green','yellow','red','orange','purple'];
console.log(typeof colors.toString())
colors.forEach(c => console.log(c)) // blue green yellow red orange purple


let arr =[1,2,3,4,5]
if (arr instanceof Array === true){
    let revArr = arr.reverse()
    revArr.forEach(a => console.log(a))
}

