let canvas = document.getElementById('draw')
function resizeCanvas() {
    w = canvas.width = window.innerWidth*.9
    h = canvas.height = window.innerHeight-20
    return {w,h}
}
resizeCanvas() //初始化canvas的大小