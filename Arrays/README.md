# Arrays

## Store multiple values with arrays

Example
```sh
var ourArray = ["John", 23];
```
Setup
```sh
var myArray = ["Fahad", 17];
```

## Nested Arrays

Example
```sh
var ourArray = [["The Universe", 42], ["EveryThing", 10101010]];
```
Setup
```sh
var myArray = [["An Apple", 4], ["Anything", 12121221]];
```

## Access Array data with indexes

Exapmle
```sh
var ourArray = [50, 60, 70];
var ourData = ourArray[0];
```
Setup
```sh
var myArray = [50, 60, 70];
var myData = myArray[1];
```

## Modify Array data with indexes

Example
```sh
var ourArray = [18, 64, 99];
ourArray[1] = 45;
```
Setup
```sh
var myArray = [16, 34, 89];
myArray[2] = 25;

Accessible
```

## Access multi-Dimensional Arrays with indexes

Setup
```sh
var myArray = [[1, 2, 3,], [4, 5, 6,], [7, 8, 9], [[10, 11, 12], 13, 14]];
myData = [2][1];
```

## Manipulate Arrays with push()

Example
```sh
var ourArray = ["Stimpson", "J", "Cat"];
ourArray.push(["happy", "Joy"]);
```

Setup
```sh
var myArray = [["Fahad", 17], ["Cat", 2]];
var myArray.push(["Dog", 2]);
```
## Manipulate Arrays with pop()

Example
```sh
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
```
Setup
```sh
var myArray = [["Fahad", 17], ["Cat", 3]];
var removedFromMyArray = ourArray.pop();

The pop() method removes the last element from an array ???
```
## Manipulate Arrays with shift()

Example 
```sh
var ourArray = ["Stimpson", "J", ["Cat"]];
var removedFromOurArray = ourArray.shift();
```
Setup
```sh
var myArray = ["Fahad", "H", ["Cat"]];
var removedFrommyArray = myArray.shift();

The shift() method removes the first element from an array ???
```

## Manipulate Arrays with unshift()

Example 
```sh
var ourArray = ["Stimpson", "J", ["Cat"]];
ourArray.unshift("Happy");
```
Setup
```sh
var myArray = ["Fahad", "H", ["Cat"]];
myArray.unshift("F");

The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. ???
```

## Shopping List

```sh
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juices", 5], ["Eggs", 12]];
console.log(myList);
```