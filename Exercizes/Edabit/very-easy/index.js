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
};

// Correct the Mistakes
export function squared(b) {
	return (b * b);
};

//  Basketball Points
export function points(twoPointers, threePointers) {

  return (twoPointers*2) + (threePointers*3);
}

// Basic Variable Assignment

export function nameString(name){
	let b = ("Edabit")

	const result = (name + b);

  	return result
} 

// less than 100

export function lessThan100(a, b){
  if(a + b < 100){
    return true
  }else{
    return false
  }
}

// "&&" operator

export function and(a, b) {
	
  const andFunc = a && b

    return andFunc
  
}

// Are the numbers equal?

export function isSameNum(num1, num2) {
	 return num1 === num2
}

// Football points

export function footballPoints(wins, draws, losses) {
	const calculatePoints = (wins*3) + (draws*1) + (losses*0);

  return calculatePoints
}

// Convert Hours and Minutes into Seconds

export function convert(hours, minutes) {
	const hoursToSec = hours * 60 * 60
  const mintusToSec = minutes * 60
  return hoursToSec + mintusToSec

}

