const colorList = [
  {
    color1: '#F0A8A8',
    color2: '#1B0F30'
  },
  {
    color1: '#B3DFFF',
    color2: '#080C1A'
  },
  {
    color1: '#FFFFFF',
    color2: '#000000'
  },
  {
    color1: '#9a8fef', //current
    color2: '#1b1647'
  },
  {
    color1: '#CFE6CF',
    color2: '#162023'
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

