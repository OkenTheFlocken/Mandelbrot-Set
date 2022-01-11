var canvas = document.getElementById ('myCanvas')
var ctx = canvas.getContext ('2d')

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
ctx.canvas.width = WIDTH
ctx.canvas.height = HEIGHT 

const REAL_SET = { start: -2, end: 1}
const IMAGINARY_SET = { start: -1, end: 1}

const colors = new Array(16).fill(0).map((_,i) => i === 0 ? '#000' : '#${((1 << 24) * Math.random() '