function fibonacci() {
    const fib = []
    for (i = 0; i <= 20; i++) {
        if (i < 2) {
            fib.push(i)
        } else {
            x = fib[i - 1] + fib[i - 2]
            fib.push(x)
        }
    }
    return fib;
}

// Ik heb dit met Enes' hulp gemaakt en heeft het uitgelegd
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610

console.log(fibonacci());
document.write(fibonacci());