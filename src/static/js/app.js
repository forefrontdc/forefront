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
    color2: '#9859eb'
  }
]

function changeColor() {
  const lastColor = localStorage.getItem('lastColor') || -1
  let randomColor = -1

  while(lastColor == randomColor || randomColor === -1) {
    randomColor = Math.floor(Math.random() * colorList.length)
  }

  localStorage.setItem('lastColor', randomColor)

  document.body.style.setProperty('--primary-color', colorList[randomColor].color1);
  document.body.style.setProperty('--secondary-color', colorList[randomColor].color2);
}

// make this global -- run it immediately inside the <body>
window.changeColor = changeColor;

document.addEventListener('DOMContentLoaded', function(e) {
  const btn = document.getElementById('colorpicker');
  btn.addEventListener('click', changeColor);

  const subscribeBtn = document.getElementById("subscribeBtn");
  subscribeBtn.addEventListener('click', function (e){
    window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us12.list-manage.com","uuid":"5fdd9325b04f428db1b066d29","lid":"e0e4812857","uniqueMethods":true}) })
    document.cookie = 'MCPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = "MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  });

});


console.log('Interested in speaking at our next event? Email hello@4front.io for details (:');

