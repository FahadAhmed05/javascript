# Change rondom backgroundColor using DOM

## Math.random
The Math.random() function returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range

## Math.floor
The floor() function of the Math object accepts a floating point number and returns the largest integer less than or equal to the given number. 

### Solution
```sh
const onClick = () => {
  let backgroundColors = [
    "red",
    "blue",
    "yellow",
    "purple",
    "green",
    "lightBlue",
  ];

  const backgroundElement = document.getElementById("backgroundChanger");
  const randomId = Math.floor(Math.random() * backgroundColors.length);

  backgroundElement.style.backgroundColor = backgroundColors[randomId];
  
};
```