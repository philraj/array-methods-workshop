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





/*Write a function called highLow that takes an array of numbers, and returns an object with a property highest containing the highest number, and a property lowest containing the lowest number, using Array.prototype.reduce.
For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.
Hint: Javascript has a special value called Infinity, which is higher than any other number. See if you can initialize your reduce accumulator with Infinity and -Infinity :)*/
function highLow (array) {
    var result = {}
    
    result.highest = array.reduce( function(prev, curr) {
        return Math.max(prev, curr);
    }, -Infinity)
    
    result.lowest = array.reduce( function(prev, curr) {
        return Math.min(prev, curr);
    }, Infinity)
    
    return result;
}

console.log(highLow([1,-10,20,40,5]));





/*Expanding on exercise 6, write a function called highLowTwo that takes an array of numbers, and returns the higest, second highest, lowest, and second lowest numbers.
For example, starting with [1, -10, 20, 40, 5], your function should return:
{
  "highest": 40,
  "secondHighest": 20,
  "lowest": -10,
  "secondLowest": 5
}*/
function highLowTwo (array) {
    var result = {}
    
    result.highest = array.reduce( function(prev, curr, i) {
        if (curr > prev) {
            result.highestIndex = i;
            return curr;
        }
        else {
            return prev;
        }
    }, -Infinity);
    
    result.lowest = array.reduce( function(prev, curr, i) {
        if (curr < prev) {
            result.lowestIndex = i;
            return curr;
        }
        else {
            return prev;
        }
    }, Infinity);
    
    result.secondHighest = array.reduce( function(prev, curr, i) {
        if (i === result.highestIndex) return prev;
        else return Math.max(prev, curr);
    }, -Infinity);
    
    result.secondLowest = array.reduce( function(prev, curr, i) {
        if (i === result.lowestIndex) return prev;
        else return Math.min(prev, curr);
    }, Infinity)
    
    delete result.highestIndex;
    delete result.lowestIndex;
    
    return result;
}

console.log(highLowTwo([-55, -55, 1, -10, 20, 40, 5]));