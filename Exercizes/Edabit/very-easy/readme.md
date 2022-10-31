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
<!DOCTYPE html>
<html>
    <head>
</head>
<body>

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
</body>
</html>







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



