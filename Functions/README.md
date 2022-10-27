# Functions

## Write Reuseable code with functions 

Example
```sh
function ourReuseableFunction(){
    console.log("Hello World");
}

ourReuseableFunction();
ourReuseableFunction();
ourReuseableFunction();
```
Setup
```sh
function myReuseableFunction(){
    console.log("Heyya, World");
}

myReuseableFunction();
myReuseableFunction();
myReuseableFunction();
```

## Passing values to functions with arguments

Example
```sh
function ourFunctionsWithArgs(a, b) {
    console.log(a-b);
}
ourFunctionsWithArgs(10, 5);
```
Setup
```sh
function myFunctionWithArgs(a, b) {
    console.log(a + b);
}
myFunctionWithArgs(10, 5);
```

## Global Scope and function  ?????????

```sh

var myGlobal = 10;

function func1(){
    oopsGlobal = 5;
};

function func2(){
    var output = "";
    if(type of myGlobal != "undefined"){
        output += "myGlobal:" + myGlobal; 
    }
    if(type of oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
};

func1();
func2();
```

## Local Scope and functions


```sh
function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
} 

// and if call var console outside the function then gets an error
```

Like that,
```sh
function myLocalScope(){
    var myVar = 5;
};

myLocalScope();
console.log(myVar);
```

## Global VS. Local Scope in functions

```sh
var outerWear = "T-Shirt";

function myOutfit(){
    outerWear = "Sweater";

    return outerWear;
}

console.log(myOutfit());

Q, Difference b/w local and global variables??
```

### Global variable

1. var outerWear = "T-Shirt";

### Local variable

1. outerWear = "Sweater"

## Return a value from a function with return

```sh 
function minusSeven(num){
    return num - 7;
};

console.log(minusSeven(10));
```

Another one
```sh
function timesFive(num){
    return num * 5;
};

console.log(timesFive(5));
```
## UnderStanding undefined value returned from a function

Example
```sh
var sum = 0;
function addThree(){
    sum = sum + 3;
};
```
Setup
```sh
var sum = 0;
function addFive(){
    sum += 5;
};
```

## Assignment with a returned value ???

```sh
[var proccessed = 0;] // doesn`t do any thing;

function proccessArgs(num){
  return (num + 3) / 5;
}

proccessed = proccessArgs();
```

## Stand in line