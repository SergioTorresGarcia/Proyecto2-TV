
let imageMain = document.getElementById("Image")

// ON / OFF functions
let redBtn = document.getElementById("redBtn")
let greenLight = document.getElementById("greenLight")

redBtn.onclick = changeColor;

function changeColor(imageMain){
    return imageMain.style.background = black;
} 

redBtn.addEventListener("click", function() {
    
    document.getElementById("redBtn").style.backgroundColor = black;
  })

// VOLUME functions
let moreVolume = document.getElementById("moreVolume")
let lessVolume = document.getElementById("lessVolume")

// CHANNEL functions
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")