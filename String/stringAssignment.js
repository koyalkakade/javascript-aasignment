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
    console.log('Vowels count: ',count) 
}

 countVowelsinSTR('Hello World')

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

//5. split string into an array of words

function splitString(splitStr) {
    splitArr = splitStr.split(',');
    console.log('5. split string into an array of words', splitArr)
}

splitString('apple,banana,orange,watermelon')

//6. convert a 1st letter of each word in a string to uppercase
upperCaseArr = [];
function forUpperString(upperStr) {
    upperArr = upperStr.split(',');
    for (let i = 0; i <= upperArr.length - 1; i++) {
        upperCaseArr[i] = upperArr[i].charAt(0).toUpperCase() + upperArr[i].slice(1);
    }
    console.log('6. convert a 1st letter of each word in a string to uppercase ', upperCaseArr)
}

forUpperString('apple,banana,orange,watermelon')

//7. reverse string
function reverseStr(userstring) {
    counter = userstring.length;
    var reversestr = '';
    while (counter > 0) {
        userstr = userstring[counter - 1];
        reversestr += userstr
        counter--;
    }
    console.log('7. Reverse string', reversestr);
}

reverseStr('JAVASCRIPT')

//8. occurance of char in string

function countOccurrencesForLoop(strOcc1, charOcc1) {
    let count = 0;
    let strOcc = strOcc1.toLowerCase();
    let charOcc = charOcc1.toLowerCase();
    for (let i = 0; i < strOcc.length; i++) {
        if (strOcc[i] === charOcc) {
            count++;
        }
    }
    console.log('string :- ', strOcc)
    console.log('8. occurance of char',charOcc1,' in string ', count);
}

countOccurrencesForLoop('occurrences of a character', 'C')

//9. Remove all Non-Alphanumeric char from a string

function removeNonAlphanumeric(inputStr) {
  console.log('9. Remove all Non-Alphanumeric char from a string',inputStr.replace(/[^a-zA-Z0-9]/g, ''));
}

removeNonAlphanumeric('Hello JavaScript! "Javascipt" is easy to learn.')

//10. check if a string starts and ends with same char

function startEndChar(inputChar){
 let startChar=inputChar.charAt(0)
    console.log('10. input shring to check start and end :- ',inputChar,'start Char:- ',startChar)
 console.log('10. check if a string starts and ends with same char:- ',inputChar.endsWith(startChar))
}
startEndChar('hello javascript ')