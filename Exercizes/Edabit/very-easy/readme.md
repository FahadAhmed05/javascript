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