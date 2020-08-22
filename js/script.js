let body = document.getElementById("main");
let button = document.getElementById("button");

let random;

randomNumbers = () => {
    let random = Math.floor(Math.random() * 255);
    return random;
};

backGroundChanger = () => {
  body.style.backgroundColor = "rgb(" + randomNumbers() + "," + randomNumbers() + "," + randomNumbers() + ")";
};

buttonbackGroundChanger = () => {
    button.setAttribute('class', "button")
};

startBackgroundChange = () => {
    backGroundChanger();
    buttonbackGroundChanger();
}

button.addEventListener("click", startBackgroundChange);