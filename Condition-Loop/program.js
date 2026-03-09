//1. odd even num
num = Number(prompt("Enter number to check even or odd"))
console.log("Enter the number", num);

if (num == 0) {
    console.log('The number is Zero');
}
else if (num < 0) {
    console.log('The number is Negative');
}
else {
    console.log('The number is Positive');
}

//2. Multiplication Table
let nn = Number(prompt("Enter number for multiplication table"))
console.log('Multiplication table of', nn);
for (let i = 1; i <= 10; i++) {
    console.log('table', nn, "*", i, "=", nn * i);
}

//3. guess the number round 0.5 match, floor exact given num, ceil gives large num
var random = Math.random();
console.log('Math.random()', random)
console.log('Math.random()*10', random * 10)

console.log('Math.random()+1', (random * 10) + 1)
let genratednum = Math.floor(random * 10) + 1;
console.log("System generated number is ", genratednum);
var count = 1;

do {
    uno = parseInt(prompt("Enter number for guessing"));
    console.log('guess the number', uno)
    if (uno < genratednum) {
        console.log('To low! Try again')
    }
    else {
        console.log('To high! Try again')
    }
    if (count >= 3) {
        break;
    }
    count++;
} while (uno !== genratednum)

if (uno == genratednum)
    console.log('Correct! You guessed the number');
else
    console.log('Wrong! You have not guessed the number');


//4. Print even number
for (let j = 1; j <= 20; j++) {
    if (j % 2 == 0) {
        console.log('Even number is ', j);
    }
}

//5. sum of digits
let sum1 = 0;
let digit = parseInt(prompt("Enter number for sum of digit"));
console.log('Enter number for sum of digit', digit)
while (digit > 0) {
    let lastDigit = digit % 10;
    //  console.log('last digit',lastDigit)
    sum1 += lastDigit;

    digit = Math.floor(digit / 10);
}
console.log('sum', sum1)

//6. FizzBuzz problem

for (let k = 1; k <= 50; k++) {
    if (k % 3 == 0 && k % 5 == 0) {
        console.log('FizzBuzz')
    } else if (k % 3 == 0) {
        console.log('Fizz')
    } else if (k % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(k)
    }
}

//7. Prime Number

let no = parseInt(prompt("Enter number to check prime number"));
console.log('Enter number to check prime number ', no)
var isPrime = true;
if (no <= 1) {
    console.log(no, 'is not prime number')
} else {
    for (let i = 2; i <= no / 2; i++) {
        if (no % i == 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(no, 'is prime number')
}
else {

    console.log(no, 'is not prime number')
}

//8. find the largest number of three numbers
let no1 = parseInt(prompt("Enter 1 number to check largest number"));
let no2 = parseInt(prompt("Enter 2 number to check largest number"));
let no3 = parseInt(prompt("Enter 3 number to check largest number"));

console.log('enter 3 numbers ', no1, no2, no3)

if (no1 > no2 && no1 > no3) {
    console.log(no1, ' is the largest number')
} else if (no2 > no1 && no2 > no3) {
    console.log(no2, ' is the largest number')
}
else {
    console.log(no3, ' is the largest number')
}

//10. palindrome checker
let str = (prompt("Enter a string for palindrome"));
console.log('Enter a string for palindrome', str)
str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
console.log('Enter a string for palindrome after replace', str)
let j = str.length - 1
isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
        isPalindrome = false;
    }
    j--;
}

if (isPalindrome) {
    console.log(str, 'is a Palindrome')
}
else {
    console.log(str, 'is not a Palindrome')
}

//11. count vowel and consonant

let vowelsCount = 0;
let consonantsCount = 0;
let strToCheck = (prompt("Enter a string for count vowels and consonant"));
console.log('Enter a string for count vowels and consonant', strToCheck)

strToCheck = strToCheck.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < strToCheck.length; i++) {
    const char = strToCheck[i];
    if (char >= 'a' && char <= 'z') {
        if (vowels.includes(char)) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }
}

console.log('vowels count ', vowelsCount)
console.log('consonants Count ', consonantsCount)

//12. Reverse a Number
let usernum = parseInt(prompt("Enter a number for doing Reverse Number"));
console.log('Enter number for doing reverse number', usernum);
let userstring = usernum.toString();
counter = userstring.length;
var reversestr = '';
while (counter >= 0) {
    userstr = userstring[counter - 1];
    reversestr += userstr
    counter--;
}
console.log('Reverse Number', parseInt(reversestr));

//13. sum of odd and even number
let evenSum = 0;
let oddSum = 0;
for (let a = 1; a <= 100; a++) {
    if (a % 2 == 0) {
        evenSum += a;
    }
    else {
        oddSum += a;
    }
}
console.log('sum of even number', evenSum);
console.log('sum of odd number', oddSum);

//14. factorial while using
let userInput = parseInt(prompt("Enter a number for factorial"));
console.log('Enter number for factorial', userInput);

factorial = 1;
while (userInput > 0) {
    factorial = factorial * userInput;
    userInput--
}
console.log('factorial of given number', factorial);

//15. Average of N number
let noOfCount = parseInt(prompt("Enter the number of count to calculate Average"));
let noOfAverage = (prompt("Enter a number for average by separating comma(,)"));
console.log('noOfAverage', noOfAverage)
let arr = noOfAverage.split(",");
console.log('arr', arr)

sum11 = 0, average = 0;
for (let c = 0; c <= (arr.length - 1); c++) {
    sum11 += parseInt(arr[c]);
}
console.log('Sum', sum11, arr.length)
if (noOfCount == (arr.length)) {
    average = sum11 / noOfCount;
    console.log('Averge', average)
}
else {
    alert('enter right number of count')
}

//16. Leap year check
let year = parseInt(prompt("Enter the Year"));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 100 === 0)) {
    console.log('Leap year ', year);
} else {
    console.log('Not Leap year ', year);
}

//17. find divisors of a number

let no12 = parseInt(prompt("Enter number to find divisors"));
console.log('Enter number to find divisors ', no12)
var divisors = [1];
if (no12 > 1) {
    for (let i = 2; i <= no12 / 2; i++) {
        if (no12 % i == 0) {
            divisors.push(i);
        }
    }
}
else {
    alert('enter the number above 1')
}

console.log('divisors of ', no12, ' number -', divisors)

//18. fibonacci series
let nf = parseInt(prompt("Enter number to find fibonacci series"));
console.log('How many terms for Fibonacci Series ', nf);
let numberf1 = 0;
let numberf2 = 1;
fibonacci = [];
fibonacci.push(numberf1);
fibonacci.push(numberf2);
for (i = 2; i < nf; i++) {
    let current = numberf1 + numberf2;
    numberf1 = numberf2;
    numberf2 = current;
    fibonacci.push(current);
}

console.log('Fibonacci Series is ', fibonacci);

//19. Armstrong number
const numberStr = String(prompt("Enter number to find Armstrong number"));
console.log('Enter number to find Armstrong number', numberStr);
const numberOfDigits = numberStr.length;
console.log('number Of Digits', numberOfDigits);

let sumArmstrong = 0;

for (let i = 0; i < numberOfDigits; i++) {
    const digit = parseInt(numberStr[i]);
    sumArmstrong += Math.pow(digit, numberOfDigits);
}

if (sumArmstrong == numberStr) {
    console.log(numberStr, "is an Armstrong number");
}
else {
    console.log(numberStr, "is not an Armstrong number");
}