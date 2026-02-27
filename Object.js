//user and update
const user = {
    name : "Sandhya",
    age : 9,
    city : "chennai"    
};
console.log("Before update:", user);
user.age = 10;
console.log("After update:", user);


//clone an object using spread operator
const user = {
    name : "Sandhya",
    age : 9
};
const ClonedUser = {...user};
ClonedUser.age = 10;
console.log("Original:", user);
console.log("Cloned:", ClonedUser);


//freeze an object
const user = {
    name : "Sandhya",
    age : 9
};
Object.freeze(user);
user.age = 10;
console.log(user);


//deeply clean an object
function deepCopy(object) {
    return JSON.parse(JSON.stringify(obj));
}
const user = {
    name : "Sandhya",
    address : {
        city : "chennai"
    }
};
const ClonedUser = deepCopy(user);
ClonedUser.address.city = "Mumbai";
console.log("Original:", user.address.city);
console.log("Cloned:", ClonedUser.address.city);
