const colorList = [
  {
    color1: '#000',
    color2: '#ef6e13'
  },
  {
    color1: '#ce5801',
    color2: '#000'
  },
  {
    color1: '#881ee4',
    color2: '#000'
  },
  // {
  //   color1: '#FEFFD3',
  //   color2: '#E56258'
  // },
  // {
  //   color1: '#E56258',
  //   color2: '#FEFFD3'
  // },
  // {
  //   color1: '#32287E',
  //   color2: '#F7F9FF'
  // },
  // {
  //   color1: '#F7F9FF',
  //   color2: '#32287E'
  // },
  // {
  //   color1: '#00ADA2',
  //   color2: '#E1E7F2'
  // },
  // {
  //   color1: '#343434',
  //   color2: '#FFFFFF'
  // },
  // {
  //   color1: '#FFFFFF',
  //   color2: '#343434'
  // }
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

  bats.forEach(bat => {
    bat.src = document.body.style.getPropertyValue('--secondary-color') === '#000' ?
      '/static/img/bats/bat-orange.gif' :
      '/static/img/bats/bat-black.gif';
  })
}

// make this global -- run it immediately inside the <body>
window.changeColor = changeColor;

document.addEventListener('DOMContentLoaded', function(e) {
  const btn = document.getElementById('colorpicker');
  btn.addEventListener('click', changeColor);

  let i = 0;
  while (i < 5) {
    MAKE_A_SUPER_SPOOKY_BAT();
    i++;
  }
});

console.log('Interested in speaking at our next event? Email hello@4front.io for details (:');

const bats = [];

function MAKE_A_SUPER_SPOOKY_BAT() {
  var r = Math.random,
      n = 0,
      d = document,
      w = window,
      i = d.createElement('img'),
      z = d.createElement('div'),
      zs = z.style,
      a = w.innerWidth * r(),
      b = w.innerHeight * r();
  zs.position = "fixed";
  zs.left = 0;
  zs.top = 0;
  zs.opacity = 0;
  zs.zIndex = 9999;
  z.appendChild(i);
  bats.push(i);
  i.src = document.body.style.getPropertyValue('--secondary-color') === '#000' ?
    '/static/img/bats/bat-orange.gif' :
    '/static/img/bats/bat-black.gif';
  d.body.appendChild(z);

  function R(o, m) {
      return Math.max(Math.min(o + (r() - .5) * 400, m - 50), 50)
  }

  function A() {
      var x = R(a, w.innerWidth),
          y = R(b, w.innerHeight),
          d = 5 * Math.sqrt((a - x) * (a - x) + (b - y) * (b - y));
      zs.opacity = n;
      n = 1;
      zs.transition = zs.webkitTransition = d / 1e3 + 's linear';
      zs.transform = zs.webkitTransform = 'translate(' + x + 'px,' + y + 'px)';
      i.style.transform = i.style.webkitTransform = (a > x) ? '' : 'scaleX(-1)';
      a = x;
      b = y;
      setTimeout(A, d);
  };
  setTimeout(A, r() * 3e3);
}
