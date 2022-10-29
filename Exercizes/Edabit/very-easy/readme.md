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