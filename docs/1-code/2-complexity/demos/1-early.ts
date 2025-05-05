// * Return early for invalid or trivial cases

function isPrime(n: number): boolean {
  if (n > 0) {
    if (n > 1) {
      // ! avoid nesting by returning early for 0 and 1
			for (let i = 2; i < n; i++) {
				if (n % i === 0) return false;
			}
			return true;
		}
		return false;
	}
	throw new Error("Number must be greater than 0");
}

function getFibonacci(n: number): number {
  if (n >= 0) {
    if(n>1){
      return getFibonacci(n - 1) + getFibonacci(n - 2);
    }
    return n;
  }
  throw new Error("Number must be greater or equal to 0");
}