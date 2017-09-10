let earser = document.getElementsByClassName('earser')[0]
let paint = document.getElementsByClassName('paint')[0]
let empty = document.getElementsByClassName('empty')[0]
let ctx = canvas.getContext('2d')
var allLine = allLine || 1
var allColor = allColor || 'black'



let lastPoint = null  //记录上一个点的位置
function drawLine(x1, y1, x2, y2) {  //画线函数
    ctx.lineWidth = allLine  //改变线宽

    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = allColor
    ctx.stroke()
}
function getCurrentPoint(e) {
    //console.log('得到当前位置在生效')
    let x = e.clientX - 10
    let y = e.clientY - 10
    if (!lastPoint) {
        return
    }
    //console.log(lastPoint.x,lastPoint.y,x,y)
    drawLine(lastPoint.x, lastPoint.y, x, y)
    lastPoint = { x, y }
}
function getLastPoint(e) {
    let x = e.clientX - 10
    let y = e.clientY - 10
    lastPoint = { x, y }
    canvas.addEventListener('mousemove', getCurrentPoint)
    //console.log(e)
}
function creation() {  //绘画函数
    lastPoint = null
    removeEvent()
    paint.classList.add('backgroundColor')
    earser.classList.remove('backgroundColor')
    empty.classList.remove('backgroundColor')

    canvas.addEventListener('mousedown', getLastPoint) //鼠标按下，得到上一个点并生成一个鼠标移动事件
    canvas.addEventListener('mousemove', getCurrentPoint) //鼠标移动，得到当前点，并且并且画线
    canvas.addEventListener('mouseup', function () { //鼠标松开，移除画线功能
        canvas.removeEventListener('mousemove', getCurrentPoint)
    })
}
creation()
paint.addEventListener('click', creation) //点击绘画，接着画


//橡皮擦
function clearPart(e) {
    let x = e.clientX - 15
    let y = e.clientY - 15
    ctx.clearRect(x, y, 10, 10)
    //console.log('橡皮擦在生效')
}
function moveClear() {
    canvas.addEventListener('mousemove', clearPart)
}
function earserPart(e) {
    clearPart(e)
    moveClear()
}
function earserDown() {
    canvas.addEventListener('mousemove', earserPart)
}
earser.addEventListener('click', fireEarser)//进入橡皮擦，增加一个橡皮擦事件

function fireEarser() {
    removeEvent()
    paint.classList.remove('backgroundColor')
    earser.classList.add('backgroundColor')
    empty.classList.remove('backgroundColor')

    canvas.addEventListener('mousedown', earserDown)
    canvas.addEventListener('mouseup', function () {
        canvas.removeEventListener('mousemove', earserPart)
        canvas.removeEventListener('mousemove', clearPart)
    })
}

empty.addEventListener('click', function () {
    //清空canvas内容
    let { w, h } = resizeCanvas()
    ctx.clearRect(0, 0, w, h)
})
function removeEvent() {
    //取消橡皮擦事件
    canvas.removeEventListener('mousedown', earserDown)
    canvas.removeEventListener('mousemove', earserPart)
    canvas.removeEventListener('mousemove', clearPart)
    //取消绘画事件
    canvas.removeEventListener('mousedown', getLastPoint)
    canvas.removeEventListener('mousemove', getCurrentPoint)
}