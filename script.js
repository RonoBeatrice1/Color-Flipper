function changeColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = "rgb(" + red + "," + green + "," + blue + ")"; //Here, the values of red, green, and blue are concatenated together to form a string in the format "rgb(red, green, blue)". This string represents the randomly generated RGB color.

  document.getElementById("colorFlipper").style.backgroundColor = color;
}
