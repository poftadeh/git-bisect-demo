const primeFinder = require('./primefinder');
const FIRST_TEN_PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

const result = primeFinder(10);
console.log(`Output: [${result}]`);
console.log(`Expected: [${FIRST_TEN_PRIMES}]`);

// Check if function result matches what is expected.
const arraysMatch = result.every(prime => FIRST_TEN_PRIMES.includes(prime));

if (arraysMatch) {
  console.log('Test Passes.\n');
  process.exit(0);
} else {
  console.log('Test Fails.\n');
  process.exit(1);
}
