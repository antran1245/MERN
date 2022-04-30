// 1
console.log(hello);
var hello = 'world';
//Prediction: undefined
//var hello;
//console.log(hello); logs undefined
//hello = 'world

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//Prediction: logs magnet
/*
var needle;
function test() {...}
function test() {
    var needle;
    needle = 'marget'
    console.log(needle);
}
needle = 'haystack'
test();
*/

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//Prediction: logs super cool
/*
var brendan;
function print() {...}
brendan = 'super cool'
console.log(brendan)
*/

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//Prediction: logs chicken, half-chicken
/*
var food
function eat() {...}
function eat() {
    var food;
    food ='half-chicken'
    console.log(food)
    food = 'gone'
}
console.log(food);
eat();
*/

// 5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//Prediction: error

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//Prediction: undefined, rock, r&b, disco
/*
var genre
console.log(genre)
genre = 'disco'
function rewind(){...}
function rewind() {
    var genre
    genre = 'rock'
    console.log(genre)
    genre = 'r&b'
    console.log(genre)
}
rewind()
console.log(genre)
*/

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//Prediction: san jose, seattle, burbank, san jose
/*
var dojo
function learn() {...}
function learn() {
    var dojo
    dojo = "seattle"
    console.log(dojo)
    dojo = "burbank"
    console.log(dojo)
}
dojo = 'san jose'
console.log(dojo)
console.log(dojo)
*/

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// Prediction: error