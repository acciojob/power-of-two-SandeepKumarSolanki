const isPowerOfTwo = (number) => {
  //your code here
	 // Check if number is greater than 0 and if the bitwise AND between number and number-1 is 0
  return number > 0 && (number & (number - 1)) === 0;
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
