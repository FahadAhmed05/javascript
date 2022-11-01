// function printArray(number) {
//     var newArray = [];

//     for(var i = 1; i <= number; i++) {
//       newArray.push(i);
//     }

//     return newArray;
//   }

// function sumPolygon(n) {
// 	const polygon = (n-2) * (180);

// 	return polygon
// }

// Area of Triangle
export function triArea(base, height) {
  return (base * height) / 2;
}

// Circuit power
export function circuitPower(voltage, current) {
  return voltage * current;
}

// Correct the Mistakes
export function squared(b) {
  return b * b;
}

//  Basketball Points
export function points(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}

// Basic Variable Assignment

export function nameString(name) {
  let b = "Edabit";

  const result = name + b;

  return result;
}

// less than 100

export function lessThan100(a, b) {
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
}

// "&&" operator

export function and(a, b) {
  const andFunc = a && b;

  return andFunc;
}

// Are the numbers equal?

export function isSameNum(num1, num2) {
  return num1 === num2;
}

// Football points

export function footballPoints(wins, draws, losses) {
  const calculatePoints = wins * 3 + draws * 1 + losses * 0;

  return calculatePoints;
}

// Convert Hours and Minutes into Seconds

export function convert(hours, minutes) {
  const hoursToSec = hours * 60 * 60;
  const mintusToSec = minutes * 60;
  return hoursToSec + mintusToSec;
}

// Fix the Expression

export function isSeven(x) {
  return x == "7" ? true : false;
}

// Are the Numbers Equal?

export function isSameNum2(num1, num2) {
  return num1 === num2 ? true : false;
}

// Profitable Gamble

export function profitableGamble(prob, prize, pay) {
  return prob * prize > pay ? true : false;
}

// Boolean to string conversion & Using Arrow Functions

export const boolToString = (flag) => {
  const func1 = flag ? "true" : "false";

  return func1;
};

// Frames per second
export function frames(minutes, fps) {
  const mint = minutes * 60;
  return mint * fps;
}

// Miserable Parody of a Calculator

export function calculator(str) {
  return eval(str);
}

// Buggy Code (Part 4)
export function greeting(name) {
  if (name == "Mubashir") {
    return "Hello, my Love!";
  }
  return "Hello, " + name + "!";
}

// Two Makes Ten

export function makesTen(a, b) {
  if (a + b == 10 || a == 10 || b == 10) {
    return true;
  } else {
    return false;
  }
}

// Let's Fuel Up!

export function calculateFuel(n) {
  if (n * 10 < "100") {
    return 100;
  }
  return n * 10;
}

// Buggy Code (Part 2)

export function maxNum(n1, n2) {
  if (n1 < n2) {
    return n2;
  } else {
    return n1;
  }
}

// Pair Management
export function makePair(num1, num2) {
  return [num1, num2];
}

// Compare Strings by Count of Characters?
export function comp(str1, str2) {
    return str1.length === str2.length ? true : false
}

// // Is the string is empty 
export function isEmpty(s) {
	 return s == "" ? true : false
}

// Check if an Integer is Divisible By Five
export function divisibleByFive(n) {
	if(n && n % 5 === 0){
    return true
  }else{
    return false
  }
}

// Multiple 100
export function divisible(num) {
	if( num % 100 === 0){
    return true
  }else{
    return false
  }
}

// Recursion: Length of a String 
export function length(str) {
	 return str.length; 
}

// Divides Evenly
export function dividesEvenly(a, b) {

    return a % b === 0 ? true : false	
}

// Return a String as an Integer