import '../index.html'
import '../css/test.css'

const myCanvas = document.getElementById('animation_root')
const ctx = myCanvas.getContext("2d")
// ctx.globalCompositeOperation = 'lighter'

let getStyle = (obj, attr) => { // 获取css样式
  if (obj.currentStyle) {
    return obj.currentStyle[attr];
  } else {
    return getComputedStyle(obj, false)[attr];
  }
}

let windowWidth = parseInt(getStyle(myCanvas, 'width'))
let windowHeight = parseInt(getStyle(myCanvas, 'height'))
let circle = []
let length = circle.length
let maxCount = 15
let allDeg = Math.PI * 2
let moveTimer
let index = 1;

const generateCircle = ({
  x,
  y,
  radius,
  vx,
  vy,
  r,
  g,
  b,
  a,
}, circleIndex) => {
  x = x ? x : Math.floor(windowWidth / 2)
  y = y ? y : Math.floor(windowHeight)
  radius = radius ? radius : Math.floor(Math.random() * 5) + 30
  vx = vx ? vx : ((Math.floor(Math.random() * 10) + 3) * (Math.random() > .5 ? 1 : -1))
  vy = vy ? vy : Math.floor(Math.random() * 10) + 3
  r = r ? r : Math.floor(Math.random() * 256)
  g = g ? g : Math.floor(Math.random() * 256)
  b = b ? b : Math.floor(Math.random() * 256)
  a = a ? a : Math.random()

  ctx.beginPath()
  ctx.lineWidth = 1.0
  ctx.arc(x, y, radius, 0, allDeg);

  // ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`
  // ctx.stroke()
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
  ctx.fill()
  if (x + vx + radius >= windowWidth) {
    vx = -(Math.floor(Math.random() * 10) + 3)
  } else if (x + vx - radius <= 0) {
    vx = Math.floor(Math.random() * 10) + 3
  }
  x += vx
  if (y + vy + radius >= windowHeight) {
    vy = -(Math.floor(Math.random() * 10) + 3)
  }
  y += vy
  if (y + vy + radius * 2 <= 0) {
    circle[circleIndex] = {
      x: Math.floor(windowWidth / 2),
      y: Math.floor(windowHeight),
      radius: Math.floor(Math.random() * 5) + 30,
      vx: ((Math.floor(Math.random() * 10) + 3) * (Math.random() > .5 ? 1 : -1)),
      vy: Math.floor(Math.random() * 10) + 3,
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
      a: Math.random()
    }
    return
  }
  if (!isNaN(circleIndex)) {
    circle[circleIndex] = {
      x,
      y,
      radius,
      vx,
      vy,
      r,
      g,
      b,
      a,
    }
    return
  }
  if (length >= maxCount) {
    return
  }
  circle.push({
    x,
    y,
    radius,
    vx,
    vy,
    r,
    g,
    b,
    a,
  })
  length = circle.length
}

const circleMove = () => {
  clearInterval(moveTimer)
  moveTimer = setInterval(() => {
    // draw()
    ctx.clearRect(0, 0, windowWidth, windowHeight);
    for (let i = 0; i < length; i++) {
      generateCircle(circle[i], i)
    }
  }, 33)
}

// const draw = () => {
//   const img = new Image()
//   img.onload = () => {
//     // for (let i = 0; i < 4; i++) {
//     //   for (let j = 0; j < 3; j++) {
//     ctx.drawImage(img, 1210, 90, 600, 460, 0, 0, 375, 270)
//     //   }
//     // }
//   }
//   img.src = '../img/juju.jpeg'
// }

window.onload = () => {
  // let timer = setInterval(() => {
  //   circleMove()
  //   if (length >= maxCount) {
  //     circleMove()
  //     clearInterval(timer)
  //     return
  //   }
  //   for (let i = 0; i < index; i++) {
  //     generateCircle({})
  //   }
  //   index *= 2
  // }, 1234)

  // ctx.fillRect(0, 0, 150, 150); // 使用默认设置绘制一个矩形
  // ctx.save(); // 保存默认状态

  // ctx.fillStyle = '#09F' // 在原有配置基础上对颜色做改变
  // ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形

  // ctx.save(); // 保存当前状态
  // ctx.fillStyle = '#FFF' // 再次改变颜色配置
  // ctx.globalAlpha = 0.5;
  // ctx.fillRect(30, 30, 90, 90); // 使用新的配置绘制一个矩形

  // ctx.restore(); // 重新加载之前的颜色状态
  // ctx.fillRect(45, 45, 60, 60); // 使用上一次的配置绘制一个矩形

  // ctx.restore(); // 加载默认颜色配置
  // ctx.fillRect(60, 60, 30, 30); // 使用加载的配置绘制一个矩形

  // for (var i = 0; i < 3; i++) {
  //   for (var j = 0; j < 3; j++) {
  //     ctx.save();
  //     ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
  //     ctx.translate(10 + j * 50, 10 + i * 50);
  //     ctx.fillRect(0, 0, 25, 25);
  //     ctx.restore();
  //   }
  // }
}




var sun = new Image();
var moon = new Image();
var earth = new Image();

function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(drawSun);
}

function drawSun() {
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 50, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // Moon
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(drawSun);
}

// init();

var raf;
var running = false;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 1,
  radius: 25,
  color: 'blue',
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.save()
    ctx.restore()
    ctx.fill();
  }
};

function clear() {
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.save()
  ctx.restore()
  ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > myCanvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > myCanvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}
raf = window.requestAnimationFrame(draw);

// myCanvas.addEventListener('mousemove', function (e) {
//   if (!running) {
//     clear();
//     ball.x = e.offsetX;
//     ball.y = e.offsetY;
//     ball.draw();
//   }
// });

// myCanvas.addEventListener('click', function (e) {
//   if (!running) {
//     raf = window.requestAnimationFrame(draw);
//     running = true;
//   }
// });

// myCanvas.addEventListener('mouseout', function (e) {
//   window.cancelAnimationFrame(raf);
//   running = false;
// });

ball.draw();