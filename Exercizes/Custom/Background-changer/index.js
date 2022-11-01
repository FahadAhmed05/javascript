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
