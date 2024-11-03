function generateFibonacci(terms) {
    if (terms <= 0) return []; 
    if (terms === 1) return [0]; 
    if (terms === 2) return [0, 1]; 

    const fibonacci = [0, 1]; // Initialize the array with the first two terms

    for (var i = 2; i < terms; i++) {
        const nextTerm = fibonacci[i - 1] + fibonacci[i - 2]; 
        fibonacci.push(nextTerm); 
    }

    return fibonacci; 
}

// Example usage:
const numberOfTerms = 10; // Define the number of terms
const fibonacciSequence = generateFibonacci(numberOfTerms);
console.log(`Fibonacci sequence up to ${numberOfTerms} terms:`, fibonacciSequence);
