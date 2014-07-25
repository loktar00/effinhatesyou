var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    grad = null,
    gradStops = {
        speed : 0.5,
        colA: {
            brightness: 255,
            lighten: 0
        },
        colB: {
            brightness: 255,
            lighten: 0
        }
    },
    cycle = 0;

function colorCycle(cycle, bright, light) {
    bright = bright || 255;
    light = light || 0;
    cycle *= 0.1;
    var r = ~~ (Math.sin(0.3 * cycle + 0) * bright + light),
        g = ~~ (Math.sin(0.3 * cycle + 2) * bright + light),
        b = ~~ (Math.sin(0.3 * cycle + 4) * bright + light);

    return 'rgb(' + Math.min(r, 255) + ',' + Math.min(g, 255) + ',' + Math.min(b, 255) + ')';
}


function colorize() {
    cycle += gradStops.speed;
    grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, colorCycle(cycle, gradStops.colA.brightness, gradStops.colA.lighten));
    grad.addColorStop(1, colorCycle(cycle + 60, gradStops.colB.brightness, gradStops.colB.lighten));
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(colorize);
}

setTimeout(function () {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.body.offsetHeight;
    colorize();
},100);

window.onresize = function () {
  height = canvas.height = document.body.offsetHeight;
  width = canvas.width = document.body.offsetWidth;
};