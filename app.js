const button1 = document.querySelector('.button-1')
const button2 = document.querySelector('.button-2')
const body = document.body

const randomColor1 = function(){
    let hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

const randomColor2 = function(){
    let hex = "ABCDEF0123456789"
    let color = "#"
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalId
const startChangingColor = function(){
    function changeBgColor(){
        body.style.background = `linear-gradient(to right, ${randomColor1()}, ${randomColor2()})`;
    }
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    } 
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null
}

button1.addEventListener('click', startChangingColor)
button2.addEventListener('click', stopChangingColor)