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





/*Write a function called filterArray that takes an array AND a function as arguments. Your filter function should return a new array that contains only the elements where the passed function returns a truthy value.
NOTE: You are allowed to use Array.prototype.filter to answer this question.
NOTE 2: This is a bit of a trick question, the answer is a one-liner :)*/
Array.prototype.filterArray = Array.prototype.filter;

//output all numbers
console.log("filterArray(): " + nums.filterArray( function(value) { 
    return true;
} ));





/*Write a function called longestWord that takes a string as argument, and returns the longest word in the string. You should use Array.prototype.reduce to do your work.
Hint: You can use String.prototype.split to split the string into an array of words.*/
function longestWord (string) {
    var words = string.split(' ');
    
    return words.reduce( function(prev, curr) {
        if (prev.length > curr.length) return prev;
        else return curr;
    });
}

console.log(longestWord("This is a phrase to test the longestWord function."));





/*Write a function called countVowels that takes a string and returns the number of vowels in the string. You should use Array.prototype.reduce to do your work.
Hint: You can use String.prototype.split again. There is a way to use it to split a string by character. Try to Google it :)
Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter is a vowel.*/
function countVowels (string) {
    var characters = string.split('');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return characters.reduce( function(acc, val) {
        if ( vowels.indexOf(val) !== -1 ) return ++acc;
        else return acc;
    }, 0);
}

console.log(countVowels("The number of vowels in this string is 10."));