//1. Write a program to count the number of vowels in a given string. 

vowels = 'aeiouAEIOU'
countVowels = 0

function countVowelsinSTR(str) {
    count = 0
    for (i = 0; i < str.length; i++) {
        if (vowels.includes(str.charAt(i))) {
            count++
        }
    }

    return count
}

const countVOfstr = countVowelsinSTR('Hello World')

console.log(countVOfstr, "countVOfstr")

//2. palindrome checker

let isPalindrome = true;
function palindrome(strPalindrome) {
    console.log('Enter a string for palindrome', strPalindrome)
    strPalindrome = strPalindrome.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log('Enter a string for palindrome after replace', strPalindrome)
    let j = strPalindrome.length - 1
    for (let i = 0; i < strPalindrome.length / 2; i++) {
        if (strPalindrome[i] != strPalindrome[j]) {
            isPalindrome = false;
        }
        j--;
    }
    if (isPalindrome) {
        console.log(strPalindrome, 'is a Palindrome')
    }
    else {
        console.log(strPalindrome, 'is not a Palindrome')
    }
}

palindrome('nitin');

//3. extract 1st word of a sentence

function extract(sentence) {
    console.log('3. extract 1 st word of a sentence', sentence.slice(0, 1));
}

extract('Wisdom Sprouts')

//4. Replace all spaces in string with (-)

function replaceAllFun(str1) {
    console.log('4. Replace all spaces in string with (-) ', str1.replaceAll(' ', '-'));
}

replaceAllFun('I am Learning HTML. HTML is very easy to learn')

