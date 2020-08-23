let body = document.getElementById("main");
let screen = document.getElementsByClassName("screen")[0];
let button = document.getElementById("button");

let randomNumber = (randomNumbers = () => {
  let random = Math.floor(Math.random() * 255);
  return random;
});

backGroundChanger = () => {
  let rgbCode = randomNumber() + "," + randomNumber() + "," + randomNumber();
  body.style.backgroundColor = `rgb(${rgbCode})`;
  screen.innerText = `Rgb Code (${rgbCode})`;
  button.setAttribute("class", "button");
};

button.addEventListener("click", backGroundChanger);