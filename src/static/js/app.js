const colorList = [
  {
    color1: '#FEFFD3',
    color2: '#E56258'
  },
  {
    color1: '#E56258',
    color2: '#FEFFD3'
  },
  {
    color1: '#32287E',
    color2: '#F7F9FF'
  },
  {
    color1: '#F7F9FF',
    color2: '#32287E'
  },
  {
    color1: '#00ADA2',
    color2: '#E1E7F2'
  },
  {
    color1: '#343434',
    color2: '#FFFFFF'
  },
  {
    color1: '#FFFFFF',
    color2: '#343434'
  }
]

function changeColor() {
  const lastColor = localStorage.getItem('lastColor') || -1
  let randomColor = -1

  while(lastColor == randomColor || randomColor === -1) {
    randomColor = Math.floor(Math.random() * colorList.length)
  }

  localStorage.setItem('lastColor', randomColor)

  document.body.style.setProperty('--primary-color', colorList[randomColor].color1)
  document.body.style.setProperty('--secondary-color', colorList[randomColor].color2)
}

changeColor()

window.onload = function(e){
  const btn = document.getElementById('colorpicker')
  btn.addEventListener('click', function(){
    changeColor()
  })

  console.log('Interested in speaking at our next event? Email hello@4front.io for details (:')
}
