# Very Easy Problems

## Return the Remainder from Two Numbers
Description : There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
###  Example : 
```sh
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0
```

### Solution 
```sh
function remainder(x, y) {
	const division = x % y;
	
	return division
}
```

## Return the Next Number from the Integer Passed

Description : Create a function that takes a number as an argument, increments the number by +1 and returns the result.

### Example
```sh
addition(0) ➞ 1

addition(9) ➞ 10

addition(-3) ➞ -2
```
 
### Solution
```sh
function addition(num) {
	const increment = (num + 1)
	
	return increment
}
# But num++ is not working???

# num++ returns the value of a before incrementing. And ++num returns the value of num after it has been incremented. 
```

## Buggy Code (Part 5)

Description : `nothing`

### Example 
```sh
printArray(1) ➞ [1]

printArray(3) ➞ [1, 2, 3]

printArray(6) ➞ [1, 2, 3, 4, 5, 6]
```
### Solution ?
```sh
function printArray(number) {
  var newArray = [];

  for(var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}
```

## Sum of Polygon Angles

Description : Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

### Example
```sh
sumPolygon(3) ➞ 180

sumPolygon(4) ➞ 360

sumPolygon(6) ➞ 720
```

### Solution 
```sh
function sumPolygon(n) {
	const polygon = (n-2) * (180);
	
	return polygon
}

**Bracket issue**
```

## Gitignore

Q. Why do we create gitignore file?

Ans. We can create a .gitignore file in our repository's root directory to tell Git which files and directories to ignore when we make a commit. To share the ignore rules with other users who clone the repository, commit the .gitignore file in to our repository. 

## Basketball Points

Description : You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

### Example

```sh
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100
```

### Solution

```sh
function points(twoPointers, threePointers) {

  return (twoPointers*2) + (threePointers*3);
}
```

## Basic Variable Assignment

Description : A student learning JavaScript was trying to make a function. His code should concatenate a passed string `name` with string `"Edabit"` and store it in a variable called `result`. He needs your help to fix this code.

### Example

```sh
ameString("Mubashir") ➞ "MubashirEdabit"

nameString("Matt") ➞ "MattEdabit"

nameString("javaScript") ➞ "javaScriptEdabit"
```

### Solution
```sh
function nameString(name){
	let b = ("Edabit")

	const result = (name + b);

  	return result
} 
```

### less than 100

Description : Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

### Example 
```sh
lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true
```

### Solution
```sh
function lessThan100(a, b){
  if(a + b < 100){
    return true
  }else{
    return false
  }
}
```

## Using the "&&" operator

Description : JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

### Example
```sh
and(true, false) ➞ false

and(true, true) ➞ true

and(false, true) ➞ false

and(false, false) ➞ false
```

### Solution
```sh
 function and(a, b) {
	
  const andFunc = a && b

    return andFunc
  
}
```
# Truth Table 
1 hour 
In the above example I have learned Truth Table

### Truth Table for a Two Variable Proposition

<table style="width:100%">
  <tr>
    <th>P</th>
    <th>Q</th>
    <th>!P</th>
    <th>!Q</th>
    <th>P or Q</th>
    <th>P & Q</th>
  </tr>
  <tr>
  <td>T</td>
  <td>T</td>
  <td>F</td>
  <td>F</td>
  <td>T</td>
  <td>T</td>
</tr>
<tr>
    <td>T</td>
    <td>F</td>
    <td>F</td>
    <td>T</td>
    <td>T</td>
    <td>F</td>
</tr>
<tr>
    <td>F</td>
    <td>T</td>
    <td>T</td>
    <td>F</td>
    <td>T</td>
    <td>F</td>
</tr>
<tr>
    <td>F</td>
    <td>F</td>
    <td>T</td>
    <td>T</td>
    <td>F</td>
    <td>F</td>
</tr>
</table>








<h2>Truth Table for a Three Variable Proposition</h2>

<table style="width:100%">
    <tr>
      <th>P</th>
      <th>Q</th>
      <th>R</th>
      <th>!Q</th>
      <th>P & !Q</th>
      <th>R or (P & !Q)</th>
    </tr>
    <tr>
    <td>T</td>
    <td>T</td>
    <td>T</td>
    <td>F</td>
    <td>F</td>
    <td>T</td>
  </tr>
  <tr>
      <td>T</td>
      <td>T</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
  </tr>
  <tr>
      <td>T</td>
      <td>F</td>
      <td>T</td>
      <td>T</td>
      <td>T</td>
      <td>T</td>
  </tr>
  <tr>
      <td>T</td>
      <td>F</td>
      <td>F</td>
      <td>T</td>
      <td>T</td>
      <td>T</td>
  </tr>
  <tr>
      <td>F</td>
    <td>T</td>
    <td>T</td>
    <td>F</td>
    <td>F</td>
    <td>T</td>
</tr>
<tr>
    <td>F</td>
    <td>T</td>
    <td>F</td>
    <td>F</td>
    <td>F</td>
    <td>F</td>
</tr>
<tr>
    <td>F</td>
    <td>F</td>
    <td>T</td>
    <td>T</td>
    <td>F</td>
    <td>T</td>
</tr>
<tr>
    <td>F</td>
    <td>F</td>
    <td>F</td>
    <td>T</td>
    <td>F</td>
    <td>F</td>
</tr>
  </table>


## Fix the Expression

Description : Fix the code in the Code tab so the function returns true if and only if x is equal to 7.

### Example
```sh
isSeven(4) ➞ false

isSeven(9) ➞ false

isSeven(7) ➞ true
```
### Solution
```sh
 function isSeven(x) {
	return x == "7" ? true : false;
}
```
1. This mark (?) is JS is called Conditional (ternary) operator.

## Profitable Gamble

Description : Create a function that takes three arguments `prob`, `prize`, `pay` and returns `true` if `prob * prize > pay;` otherwise return false.

### Example
```sh
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true
```
### Solution
```sh
function profitableGamble(prob, prize, pay) {
	return (prob * prize) > pay ? true : false
}
```
## FPS

1. Apart from that I also learned about fps


Stands for "Frames Per Second." FPS is used to measure frame rate – the number of consecutive full-screen images that are displayed each second. It is a common specification used in video capture and playback and is also used to measure video game performance.

### Frames Per Second
Description : Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

### Example
```sh
frames(1, 1) ➞ 60

frames(10, 1) ➞ 600

frames(10, 25) ➞ 15000
```

### Solution
```sh
function frames(minutes, fps) {
    const mint = minutes * 60
    return mint * fps	
}
```

## Miserable Parody of a Calculator
Description : Create a function that will handle simple math expressions. The input is an expression in the form of a string.

### Example
```sh
calculator("23+4") ➞ 27

calculator("45-15") ➞ 30

calculator("13+2-5*2") ➞ 5

calculator("49/7*2-3") ➞ 11
```
### Solution
```sh
function calculator(str) {
	 return (eval(str))
```

## Buggy Code (Part 4)
Description : Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

### Example 
```sh
greeting("Matt") ➞ "Hello, Matt!"

greeting("Helen") ➞ "Hello, Helen!"

greeting("Mubashir") ➞ "Hello, my Love!"
```
### Solution
```sh
function greeting(name) {
  if(name == "Mubashir") {
    return "Hello, my Love!";
  }
  return "Hello, " + name + "!";
}
```

## Two Makes Ten
Description : Create a function that takes two arguments. Both arguments are integers, `a` and `b`. Return `true` if one of them is `10` or if their sum is `10`

### Example
```sh
makesTen(9, 10) ➞ true

makesTen(9, 9) ➞ false

makesTen(1, 9) ➞ true
```

### Solution

```sh
function makesTen(a, b) {
	if((a + b) == 10 || a == 10 || b == 10){
    return true
  }else{
    return false
  }
}
```
## Let's Fuel Up!
Description : A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance.

### Example
```sh
calculateFuel(15) ➞ 150

calculateFuel(23.5) ➞ 235

calculateFuel(3) ➞ 100
```

### Solution
```sh
function calculateFuel(n) {
  if( n*10 < "100"){
    return 100
  }
	return n * 10 
}
```

### == vs === in js 
### Here are the important differences between =, ==, and ===

<table style="width:100%">
    <tr>
      <th>=</th>
      <th>==</th>
      <th>===</th>
    </tr>
    <tr>
    <td>= in JavaScript is used for assigning values to a variable.</td>
    <td>== in JavaScript is used for comparing two variables, but it ignores the datatype of variable.</td>
    <td>=== is used for comparing two variables, but this operator also checks datatype and compares two values.</td>
  </tr>
  <tr>
      <td>It is called as assignment operator</td>
      <td>It is called as comparison operator</td>
      <td>It is also called as comparison operator</td>
  </tr>
  <tr>
      <td>The assignment operator can evaluate to the assigned value</td>
      <td>Checks the equality of two operands without considering their type.</td>
      <td>Compares equality of two operands with their types.</td>
  </tr>
  <tr>
      <td>It does not return true or false</td>
      <td>Return true if the two operands are equal. It will return false if the two operands are not equal.</td>
      <td>It returns true only if both values and data types are the same for the two variables.</td>
  </tr>
  <tr>
      <td>= simply assign one value of variable to another one.</td>
    <td>== make type correction based upon values of variables.</td>
    <td>=== takes type of variable in consideration.</td>
</tr>
<tr>
    <td>== will not compare the value of variables at all.</td>
    <td>The == checks for equality only after doing necessary conversations.</td>
    <td>If two variable values are not similar, then === will not perform any conversion.</td>
</tr>
  </table>


## primitive vs non-primitive

### Primitive :- (String,Boolean,Number,BigInt,Null,Undefined,Symbol )

### Stack memory

Stack memory stores primitive types and the addresses of objects. The object values are stored in heap memory.

### Examples
1. String (String is the collection of characters)
2. Boolean
3. Number
4. BigInt
5. Null
6. Undefine
7. Symbol

Object is not a type of primitive data type. Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an object.


### (Non-Primitive or Reference ) :- Object (array, functions) also called object references. 

Non-primitive data types are called reference types because they refer to objects.

### heap memory
Whenever a non-primitive data type is defined, it refers a memory location where the data is stored in heap memory i.e., it refers to the memory location where an object is placed. Therefore, a non-primitive data type variable is also called referenced data type or simply object reference variable.

### Examples
1. Strings
2. Arrays
3. Classes
4. Interface
5. Object literals
6. functions
7. Dates

### Differenec b/w stack & heap

Heap memory is used by all the parts of the application whereas stack memory is used only by one thread of execution.

## Check if an Integer is Divisible By Five
Description : Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

### Example 
```sh
divisibleByFive(5) ➞ true

divisibleByFive(-55) ➞ true

divisibleByFive(37) ➞ false
```
### Solution
```sh
function divisibleByFive(n) {
	if(n && n % 5 === 0){
    return true
  }else{
    return false
  }
}
```

## Divides Evenly
Description : Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

### Example 
```sh
dividesEvenly(98, 7) ➞ true
// 98/7 = 14

dividesEvenly(85, 4) ➞ false
// 85/4 = 21.25
```
### Solution
```sh

```

### Introduction to GIT
1. Local Machine Git 
2. Server  -> GIT 
--------------------------------

  1. Stage   ->
  2. Commit -> Local machine  
  3. Push  -> Server Github 