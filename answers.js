//Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.
var nums = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];

function printPositives (array) {
    array.forEach( function(value) {
        if (value > 0) console.log(value);
    });
}

console.log("printPositives(): ");
printPositives(nums);



//Similar to the previous exercise, write a function called getPositives that takes an array and uses its filter method to return a new array with only the positive numbers
function getPositives (array) {
    return array.filter( function (value) {
        if (value > 0) return true;
    });
}

console.log("getPositives(): " + getPositives(nums));