let red = document.getElementsByClassName('red')[0]
let blue = document.getElementsByClassName('blue')[0]
let black = document.getElementsByClassName('black')[0]
let yellow = document.getElementsByClassName('yellow')[0]
let green = document.getElementsByClassName('green')[0]

var colorList = [red, blue, black, yellow, green]
//ctx.strokeStyle = 'red'
black.classList.add('backgroundColor')


function removeColor() {
    colorList.forEach(function (ele) {
        ele.classList.remove('backgroundColor')
    })
}
colorList.forEach(function (element, index) {
    console.log(element, index)
    element.addEventListener('click', function () {
        let Color = ['red', 'blue', 'black', 'yellow', 'green']
        removeColor()
        element.classList.add('backgroundColor')
        allColor = Color[index]
    })
})