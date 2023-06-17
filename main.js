let _button = document.getElementsByTagName("button")[0];
let colorShow = document.querySelector(".colorShow");
let _body = document.getElementsByTagName("body")[0];
_body.style.backgroundColor = "rgb(220, 38, 38)";
colorShow.innerHTML = "Background Color : rgb(220,38,38)";
colorShow.style.color = "rgb(220, 38, 38)";

// event click
_button.addEventListener("click", () => {
  let red = randomColor();
  let green = randomColor();
  let blue = randomColor();
  _body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  colorShow.innerHTML = `Background Color : rgb(${red},${green},${blue})`;
  colorShow.style.color = `rgb(${red},${green},${blue})`;
});
//   randomColor func
function randomColor() {
  return Math.floor(Math.random() * 256);
}
