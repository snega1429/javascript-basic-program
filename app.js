// Import and use the exported function
import {add} from "./math.js";
console.log(add(5, 3));


//Require and use a CommonJS module
const multiply = require("./math");

console.log(multiply(4, 5));


