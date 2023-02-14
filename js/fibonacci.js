var firstNumber = 0;
var secondNumber = 1;

function fibonacci(x,y) {
    for (i = 0; i <= 20; i++) {
        x = y;
        y += x;
    }
    return x;

}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610

document.write(fibonacci(firstNumber,secondNumber));