let thin = document.getElementsByClassName('thin')[0]
let middle = document.getElementsByClassName('middle')[0]
let wide = document.getElementsByClassName('wide')[0]
var lineList = [thin,middle,wide]

thin.classList.add('backgroundColor')

thin.addEventListener('click',function(){
    allLine = 1
    removeLine()
    thin.classList.add('backgroundColor')
})

middle.addEventListener('click',function(){
    allLine = 2
    removeLine()
    middle.classList.add('backgroundColor')
})
wide.addEventListener('click',function(){
    allLine = 3
    removeLine()
    wide.classList.add('backgroundColor')
})
function removeLine(){
    lineList.forEach(function(ele){
        ele.classList.remove('backgroundColor')
    })
}