//1. count the number of words in sentence
countWords('Hello, I am learning javascript.')
function countWords(sstr) {
    count = sstr.trim().split(/\s+/).length;
    console.log('count the number of words in sentence: ', count);
}

//2. find the longest word in a given string
findLongestWord('Hello, I am learning javascript.')

function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    console.log('Longest word: ', longestWord)
}

//using reduce method- reduce() use for adding value to result,ittration
// function findLongestWord(str) {
//     const words = str.split(' ');
//     longestWord= words.reduce((longest, currentWord) => {
//         return currentWord.length > longest.length ? currentWord : longest;
//     }, "");
//     console.log('Logest word: ',longestWord)
// }

//3 Remove falsy values from an array
const arr = ['javascript', "html", "", false, 123, null, undefined, NaN, 0, 'css'];
removeFalsy(arr)
function removeFalsy(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArray.push(arr[i]);
        }
    }
    console.log('Remove Falsy values from array: ', newArray)
}

//also use filter method
const filteredArray = arr.filter(Boolean);
console.log('Remove Falsy values from array: ', filteredArray)

//4. find the second largest number in an array

arrayVal = [34, 23, 46, 678, 42, 568, 2, 9, 22, 6, 7, 33, 2357, 753]
secondLargestNum = ''
largestNum = arrayVal.reduce((num, max) => num > max ? num : max, 0)
console.log('largestNum-', largestNum);
for (let i = 0; i < arrayVal.length - 1; i++) {
    if (secondLargestNum < arrayVal[i] < largestNum) {
        secondLargestNum = arrayVal[i]
    }
}
console.log('second Largest Number:-', secondLargestNum);

//5. sort array without using bulit-in sort method
temp = [];
for (var j = 0; j < arrayVal.length - 1; j++) {
    for (let i = 0; i < arrayVal.length - 1; i++) {
        if (arrayVal[i] > arrayVal[i + 1]) {
             temp = arrayVal[i];
            arrayVal[i] = arrayVal[i + 1];
            arrayVal[i + 1] = temp;           
        }
    }
};

console.log('sortArr:-', arrayVal);