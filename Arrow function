//Arrow function into normal function
//normal function
function greet(name) {
    return "Hello" + name;
}
console.log(greet("Sandhya"));


//Arrow function
const greet = (name) => {
    return "Hello" + name;
}
console.log(greet("Sandhya"));


//Arrow function add two number
const add = (a,b) => {
    return a + b;
}
console.log(add(5, 3));


//callback function
function greet (name, callback) {
    console.log("Hi" + name);
    callback();
}
function sayBye() {
    console.log("Bye!");
}
greet("Sandhya", sayBye);


//function that return another function
function outer() {
    return function inner() {
        console.log("Inner function excuted");
    }
}
const result = outer();
result();
