// # JS-functions-roundup

// Solve all of these problems without using a `for` loop or `while` loops in any of your solutions. You should also avoid creating any unnecessary side effects:

// ### 1.
// write a function (or series of functions) that takes in an array that contains numbers, and returns the sum of all the even numbers

// Examples:

// ```
// Input: [2, 5, 7, 8, 10]
// Output: 20

// Input: [9, 11, 13, 15, 17, 2, 4]
// Output: 6

const sumEvens = arr => arr.filter(x => x % 2 === 0).reduce((acc, val) => acc + val);

console.log(sumEvens([2, 5, 7, 8, 10]));

// ```

// ### 2.
// write a function (or series of functions) that takes in an array that contains strings, and returns an array with the number of letters in each string

// Examples:

// ```
// Input: ['hey', 'hi', 'hello']
// Output: [3, 2, 5]

// Input: ['this', 'is', 'a', 'longer', 'array']
// Output: [4, 2, 1, 6, 5]
// ```
const strlength = arr => arr.map(x => x.length);

console.log(strlength(['this', 'is', 'a', 'longer', 'array']));


// ### 3.
// write a function (or series of functions) that takes in an array that can contain both words and numbers, and returns the sum of all the even numbers

// Examples:

// ```
// Input: [2, 'hey', 5, 'hi, 6]
// Output: 8

// Input: [9, 'cya', 5, 'goodbye', 'later, 10, 20]
// Output: 30
// ```
const addstrAndNum = arr => {
    let numbers = arr.filter(x => (parseInt(x) == x) && x % 2 === 0);
    let str = arr.filter(x => !(parseInt(x) == x) && x % 2 === 0).map(x => x = x.length);

    numbers = numbers.length > 0 ? numbers.reduce((acc, val) => acc + val) : 0;
    str = str.length > 0 ? str.reduce((acc, val) => acc + val) : 0;

    return numbers + str;
}

console.log(addstrAndNum([2, 'hey', 5, 'hi', 6]));


// ### 4.
// write a function (or series of functions) that takes in an array that an contain strings or numbers, and returns the sums of the length of all of the words (in other words, returns the sum of the total number of letters in all of the words combined)

// Examples:

// ```
// Input: ['hey', 2, 'hi', 4, 'hello']
// Output: 10

// Input: ['this', 5, 'is', 7, 'a', 'longer', 10, 'array']
// Output: 18
// ```
const totalCar = arr => {

    let chararr = arr.filter(x => !(parseInt(x) == x))
        .map(x => x.length)

    chararr = chararr.length > 0 ? chararr.reduce((acc, val) => acc + val) : 0;

    return chararr
}
console.log(totalCar(['this', 5, 'is', 7, 'a', 'longer', 10, 'array']));

// ### 5.
// write a function (or series of functions) that takes in an array of strings, and returns an object with the vowel count of all of the strings combined

// Examples:

// ```
// Input: ['hey', 'hi', 'hello']
// Output: {'a': 0, 'e': 2, 'i': 1, 'o': 1, 'u': 0}

// Input: ['this', 'is', 'a', 'longer', 'array']
// Output: {'a': 3, 'e': 1, 'i': 2, 'o': 1, 'u': 0}
// ```
const vowelCount = arr => {
    let vowels = arr.join("").split("").filter(x => x.match(/[aeiou]/gi)).sort();
    let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 }
    vowels.forEach(x => {
        obj[x] = (obj[x] || 0) + 1;
    });
    return obj;
}

console.log(vowelCount(['this', 'is', 'a', 'longer', 'array']));


// ### 6.
// write a function (or series of functions) that takes in an array of numbers, and returns an object with a count of the number of even numbers and number of odd numbers in the array

// Examples:

// ```
// Input: [1, 2, 3, 4, 5]
// Output: {'evens': 2, 'odds': 3}

// Input: [10, 10, 10, 5, 5, 5, 5]
// Output: {'evens': 3, 'odds': 4}
// ```

const evensAndOdds = arr => {
    return {
        evens: arr.filter(x => x % 2 === 0).length,
        odds: arr.filter(x => x % 2 !== 0).length
    }
}

console.log(evensAndOdds([10, 10, 10, 5, 5, 5, 5]));


// ### 7.
// write a function (or series of functions) that takes in an array of numbers, and returns an array of only the unique numbers

// Examples:

// ```
// Input: [1, 1, 2, 3, 4, 5, 6, 3]
// Output: [2, 4, 5, 6]

// Input: [3, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7]
// Output: [5, 6]
// ```
const unique = arr => {

    let obj = {}
    arr.forEach(x => {
        obj[x] = (obj[x] || 0) + 1;
    });

    return Object.keys(obj).filter(x => obj[x] === 1).map(x => x = parseInt(x));
};

console.log(unique([3, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7]));

// ### 8.
// write a function (or series of functions) that takes in a string of words, capitalizes the last letter of every word, removes any word that has an even amount of letters, and returns a string.

// Examples:

// ```
// Input: 'hey how do you feel today'
// Output: 'heY hoW yoU todaY'
// ```

const oddsCapEnd = str =>
    str.split(" ")
        .filter(x => x.length % 2 !== 0)
        .map(x => x = x.slice(0, x.length - 1) + x[x.length - 1].toUpperCase()).join(" ");

console.log(oddsCapEnd('hey how do you feel today'));


// ### 9.
// write a function (or series of functions) that takes in an array of numbers, squares every number, removes all numbers that's square is even, converts every number to a string, and returns an array.

// Examples:

// ```
// Input: [1, 2, 3, 4, 5]
// Output: ['9', '25']

// Input: [10 ,11]
// Output: ['121']
// ```
const squareRemEven = arr =>
    arr.map(x => (x * x).toString())
        .filter(x => x != 1 && x % 2 !== 0)

console.log(squareRemEven([10, 11]));


// ### 10.
// write a function (or series of functions) that takes in an array of strings, reverses every string, removes all strings with the letter 'l' in them, capitalizes the first letter of strings with an even amount of letters, and capitalizes the last letter of strings with an odd amount of letters.

// Examples:

// ```
// Input: ['bird', 'cat', 'snake', 'cat', 'dog', 'frog', 'llama']
// Output: ['Drib', 'taC', 'ekanS', 'taC', 'goD', 'Gorf']
// ```
const crazy = arr => {

    let filteredReverse = arr.filter(x => ![...x].includes("l"))
        .map(x => [...x].reverse().join(""));

    let cased = filteredReverse.map(x =>
        x.length % 2 === 0 ? x[0].toUpperCase() + x.slice(1) :
            x.slice(0, x.length - 1) + x[x.length - 1].toUpperCase());

    return cased
}

console.log(crazy(['bird', 'cat', 'snake', 'cat', 'dog', 'frog', 'llama']));


// ### 11.
// write a function (or series of functions) that takes in an array of strings, removes duplicate strings, removes all of the strings with an even number of letters, and multiplies the remaining letter counts together to return a product.

// Examples:

// ```
// Input: ['bird', 'cat', 'snake', 'cat', 'dog', 'frog']
// Output: 45

// Input: ['this', 'is', 'a', 'test', 'test']
// Output: 1
// ```
const outOfNames = arr => [...new Set(arr)]
    .map(x => x.length)
    .filter(x => x % 2 !== 0)
    .reduce((acc, val) => acc * val);


console.log(outOfNames(['bird', 'cat', 'snake', 'cat', 'dog', 'frog']));
