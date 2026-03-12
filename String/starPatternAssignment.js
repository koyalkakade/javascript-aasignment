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




