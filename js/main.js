
let image = document.getElementById("image") // PANTALLA
let redBtn = document.getElementById("redBtn") // ON / OFF functions



// redBtn.onclick = changeColor;
redBtn.addEventListener("click", (e) => {
  let lastClass = image.classList[image.classList.length - 1];

  if (lastClass == "blackScreen") {
    image.classList.remove("blackScreen")
    image.classList.add("static")
    // displayChannel.innerHTML = 'CHANNEL 1';
    // setTimeout(function(){displayChannel.innerHTML = ''}, 2000);
    // greenDot.style.backgroundColor= "lightgreen";
  } else if (lastClass == "static") {
    image.classList.remove(lastClass)
    image.classList.add("blackScreen");
    // greenDot.style.backgroundColor= "darkred";
  }
})



// CHANNEL buttons
// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")
// let btn3 = document.getElementById("btn3")
// let btn4 = document.getElementById("btn4")
// let btn5 = document.getElementById("btn5")
// let btn6 = document.getElementById("btn6")


const allBtns = document.getElementsByClassName("btn")
let arrayBtns = Array.from(allBtns)

const allNums = document.getElementsByClassName("numbers")
let arrayNums = Array.from(allNums)

arrayBtns.map(
  item => item.addEventListener("click", (e) => {
    let lastClass = image.classList[image.classList.length - 1];

    if (lastClass != "blackScreen") {
      switch (item.id) {
        case "btn1":
          image.classList.remove(lastClass)
          image.classList.add("ch1");
          break;
        case "btn2":
          image.classList.remove(lastClass)
          image.classList.add("ch2");
          break;
        case "btn3":
          image.classList.remove(lastClass)
          image.classList.add("ch3");
          break;
        case "btn4":
          image.classList.remove(lastClass)
          image.classList.add("ch4");
          break;
      }
    }
  }
))











// greenDot.style.backgroundColor= "lightgreen";





// let greenDot = document.getElementsByClassName("greenDot")











// VOLUME functions
let moreVolume = document.getElementById("moreVolume")
let lessVolume = document.getElementById("lessVolume")

// STAMPS (channel, time, date)    .innerHTML = Date()">
let displayChannel = document.getElementById("displayChannel")
let displayDay = document.getElementById("displayDay")
let displayTime = document.getElementById("displayTime")







// console.log(allNums)
// console.log(arrayNums)

// arrayBtns.map(
//   el => {
//     el.addEventListener("click", (e) => {
//       image.classList.remove(lastClass)
//       image.classList.add("ch" + e.target.)
//       console.log(image.classList)
//       console.log(e)
//     })
//   }
// )

// const allEffects = (ch) => {
//   displayChannel.innerHTML = 'CHANNEL 1';
//   setTimeout(function(){displayChannel.innerHTML = ''}, 2000)
//   imageMain.classList.remove(lastClass)
//   imageMain.classList.add(ch)

// }
