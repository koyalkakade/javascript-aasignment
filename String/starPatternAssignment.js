//1. print Square pattern
function printSquare(n) {
    console.log('1. ----print Square pattern----');
    for (i = 0; i < n; i++) {
        let row = ''
        for (j = 0; j < n; j++) {
            row += '* '
        }
        console.log(row);
    }
}

printSquare(5)

//2. print Right Angle Traingle
function printRightAngleTraingle(n) {
    console.log('2. ---- print Right Angle Traingle----');
    for (i = 1; i <= n; i++) {
        let row = ''
        for (j = 1; j <= i; j++) {
            row += '* '
        }
        console.log(row);
    }
}

printRightAngleTraingle(5)

//3.print Inverted Triangle
function printInvertedTriangle(n) {
    console.log('3. ---- print Inverted Triangle----');
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}
printInvertedTriangle(5)

//4. print Pyramid
function printPyramid(n) {
    console.log('4. ---- print Pyramid----');
    for (let i = 1; i <= n; i++) {
        let spaces = "";
        for (let j = 1; j <= n - i; j++) {
            spaces += " ";
        }
        let stars = "";
        for (let k = 1; k <= (2 * i - 1); k++) {
            stars += "*";
        }
        console.log(spaces + stars);
    }
}

printPyramid(5);

//5. print Reverse Pyramid
function printReversePyramid(n) {
    console.log('5. ---- print Diamond----');
    for (let i = 1; i <= n; i++) {
        let spaces = "";
        for (let j = 1; j <= n - i; j++) {
            spaces += " ";
        }
        let stars = "";
        for (let k = 1; k <= (2 * i - 1); k++) {
            stars += "*";
        }
        console.log(spaces + stars);
    }
    for (let i = n; i >= 1; i--) {
        let spaces = "";
        for (let j = 1; j <= n - i; j++) {
            spaces += " ";
        }
        let stars = "";
        for (let k = 1; k <= (2 * i - 1); k++) {
            stars += "*";
        }
        console.log(spaces + stars);
    }
}

printReversePyramid(5);

//6. print number pyramid
function printNumberPyramid(n) {
    console.log('5. ---- print number Pyramid----');
    for (let i = 1; i <= n; i++) {
        let spaces = "";
        for (let j = 1; j <= n - i; j++) {
            spaces += " ";
        }
        let stars = "";
        for (let k = 1; k <= (2 * i - 1); k++) {
            stars += i;
        }
        //or
        //  for (let k = 1; k <= i; k++) {
        //     stars += i+" ";
        // }
        console.log(spaces + stars);
    }
}
printNumberPyramid(5);

//7. print pascals pyramid
function printPascalsPyramid(n) {
    console.log('7. ---- print pascals Pyramid----');
    for (let i = 0; i < n; i++) {
        let spaces = "";
        for (let j = 1; j <= n - i; j++) {
            spaces += " ";
        }
        let output = '';
        for (let j = 0; j <= i; j++) {
            output += pascalNumber(i, j) + ' ';
        }
        console.log(spaces + output);
    }
}

function pascalNumber(row, column) {
    if (column === 0 || column === row) {
        return 1;
    } else {
        let res = pascalNumber(row - 1, column - 1);
        let res1 = pascalNumber(row - 1, column);
        // console.log('res-',res,'res1- ',res1);
        return res + res1;
        // return pascalNumber(row - 1, column - 1) +
        //     pascalNumber(row - 1, column);
    }
}

printPascalsPyramid(5);

//8. Hollow Square
console.log('8. ---- print Hollow Square----');
function hollowSquarePattern(n) {
    for (let i = 0; i <= n; i++) {
        let stars = "";
        for (j = 0; j <= n; j++) {
            if (i == 0 || i == n ||j == 0 || j == n) {
                stars += "* ";
            }
            else {
                    stars += "  ";
                }
        }
        console.log(stars);
    }
}

hollowSquarePattern(5);

//9. Hourglass Pattern
function printHourglassPattern(n) {
    console.log('9. ---- print Hourglass Pattern----');
      for (let i = n; i >= 1; i--) {
        let spaces = "";
        for (let j = 1; j <= n - i; j++) {
            spaces += " ";
        }
        let stars = "";
        for (let k = 1; k <= (2 * i - 1); k++) {
            stars += "*";
        }
        console.log(spaces + stars);
    }
    for (let i = 1; i <= n; i++) {
        let spaces = "";
        for (let j = 1; j <= n - i; j++) {
            spaces += " ";
        }
        let stars = "";
        for (let k = 1; k <= (2 * i - 1); k++) {
            stars += "*";
        }
        console.log(spaces + stars);
    }
}

printHourglassPattern(5)




