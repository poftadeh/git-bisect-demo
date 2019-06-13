const isPrime = number => {
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const primeFinder = numberOfPrimes => {
  const primes = [];
  for (let i = 2; primes.length < numberOfPrimes; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
};

module.exports = primeFinder;
