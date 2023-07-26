function Recursive(number) {
    console.log("Golbal variable")

    function Factorial(num) {
        console.log("Local variable")
        if (num <= 1) {
            return 1;
        }
        else {
            return num * Factorial(num - 1);
        }
    }
    const result = Factorial(number);
    return result;
}

const num = 4;
const factorial = Recursive(num);
console.log(`Factorial of ${num} is: ${factorial}`);