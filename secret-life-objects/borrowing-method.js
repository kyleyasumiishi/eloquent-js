/*
Invoke hasOwnProperty on an object that has its own property by that name
*/

let map = {
    one: true,
    two: true,
    hasOwnProperty: false
};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));