var color = ["#CC99FF", "#FF99CC", "#FF9999", "#FFCC99"]

function changeColor() {
  var lastColorIndex = localStorage.getItem('lastColorIndex') || -1
  var randomColor = -1

  while(lastColorIndex == randomColor || randomColor === -1) {
    randomColor = Math.floor(Math.random() * color.length)
  }

  localStorage.setItem('lastColorIndex',randomColor)
  document.getElementsByTagName("body")[0].style.backgroundColor=color[randomColor]
}

changeColor()