var student = { name: "Peter", awesome: true, degree: "javaScript"}; //Doesn't work

for(item of student){
    console.log(item);
}
// will work!!!!!
var catArray = ['tabby', 'burmese', 'totrie'];

for(cat of catArray) {
    console.log(cat);
};

// Given the array, write a for of loop that print [hero] is super cool!
let heroes = ['Superman', 'Batman', 'Wonder Woman'];

var heroArray = ['Superman', 'Batman', 'Wonder Woman'];

for(hero of heroArray){
    console.log(`${hero} is super cool!`);
}