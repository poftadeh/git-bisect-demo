const primeFinder = require('./primefinder');
const firsTenPrimes = require('./firstTenPrimes');

const result = primeFinder(10);
console.log(result);
console.log(firsTenPrimes);

const comparePrimeArrays = result.every(prime => firsTenPrimes.includes(prime));

console.log(comparePrimeArrays ? 'The arrays match!' : 'The arrays do not match. Something is broken');