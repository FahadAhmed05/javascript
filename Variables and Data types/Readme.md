# Variables and Data Types

## Basic Datatypes 
1. undefined
2. null
3. string
4. symbol
5. number
6. object


## Data Type Assignment
We
```sh
var myName = 'fahad'

myName = 8

let ourName = "freeCodeCamp"

const pi = 3.14
```

## Storing values with assignment operator

We 
```sh
var a;
var b = 2;

console.log(a);

a = 7;

b = a;

console.log(a);
```
<!-- ## Initializing Variables W/ Assignment Operator

Now Another Example of Initial Variables
```sh

``` -->

## UnInitialized Variables
 
 ```sh
Inititailized these three variables

1. var a = 5;
2. var b = 10;
3. var c = "This is string";
 ```
```sh
Do not change code below this line

1. a = a + 1;
2. b = b + 5;
3. c = c + "String!";

```
## Case sensitivity in variables

```sh
Declaration

1. StUdLyCapVar;
2. properCamelCase;
3. TitleCaseOver;
```
```sh
Assignment

1. StUdLyCapVar = 10;
2. properCamelCase = "A String";
3. TitleCaseOver = 99000;

gets an error
```

## Adding Number
```sh
 var sum = 10 + 10;
 console.log(sum);
 ```
 ## Substracting Numbers

 ```sh
 var substract = 45 - 33;
console.log(substract);
```

## Multiplication Numbers

```
var multiple = 45 * 33;
console.log(multiple);
```

## Division Numbers

```sh
var devide = 30 / 5;
console.log(devide);
```

## Incrementing Numbers

```sh
var myVar = 87;

[myVar = myVar + 1;] => myVar++;

```

## Decrementing Numbers

```sh
var myVar = 87;

[myVar = myVar - 1;] => myVar--;

```

## Decimal Numbers

```sh
var ourDecimal = 6.7;

var ourDecimal = 0.0009;  

```

## Multiply Decimal Numbers

```sh
var product = 2.0 * 2.5;
console.log(product);
```

## Divide decimal

```sh
var division = 4.4 * 2.0;
console.log(division);
```

## Finding a Reminder
 ```sh
 var remainder;
 remainder = 11 % 3;
 ```

 ## Compound Assignment with Argument Addition

 ```sh
 var a = 3;
 var b =  17;
 var c = 12;

// Only modify code below this line

[a = a + 12;        =>      a += 12;
b = 9 + b;          =>      b += 9;
c = c + 7;]         =>      c += 7;
```

## Compound Assignment with Aurgument Substraction

 ```sh
 var a = 9;
 var b =  17;
 var c = 12;

// Only modify code below this line

[a = a - 12;        =>      a -= 7;
b = 9 - b;          =>      b -= 9;
c = c - 7;]         =>      c -= 7;
```
## Compound Assignment with Aurgument Multiplication

 ```sh
 var a = 3;
 var b =  17;
 var c = 12;

// Only modify code below this line

[a = a * 12;        =>      a *= 9;
b = 9 * b;          =>      b *= 9;
c = c * 7;]         =>      c *= 7;
```
## Compound Assignment with Aurgument Division

 ```sh
 var a = 9;
 var b =  17;
 var c = 12;

// Only modify code below this line

[a = a / 3;        =>      a /= 3;
b = 9 / b;          =>      b /= 9;
c = c / 7;]         =>      c /= 7;
```

## Constructing Strings with variables

Example 

```sh
var myName = "Fahad";
var myStr = "My Name is " + myName + " and i am well!";
console.log(myStr);
```

## Appending Variables to Strings

```sh
var someAdjective = "worthwhile";
var myStr = "Learning to code is ";

myStr+= someAdjective
```

## Find Length of String

Example
```sh
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
```
Setup
```sh
var lastNameLength = 0;
var lastName = "LoveLace";
```
My Code
```sh
lastNameLength = lastName.length;
console.log(lastNameLength);
```
Finding the Length of any String???

## Bracket Notation To Find First Character in String

Example
```sh
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];
```
Setup
```sh
var firstLetterOfLastName = "";
var lastName = "LoveLace";
```

My Code
```sh

firstLetterOfLastName = lastName[0];

console.log(firstLetterOfLastName);
```
## String Immutability

Setup
```sh
var myStr = "Hello world!";

myStr = "Hello world";
```
