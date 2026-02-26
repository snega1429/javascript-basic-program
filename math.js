// module exporting a function using ES Modules
export function add ( a, b ) {
return a + b;
}


// Create a CommonJS module using module.exports.
function add(a, b) {
    return a + b;
    }
    module.exports = add;
