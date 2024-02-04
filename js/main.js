
// Screen - DIV where images will be showing
let image = document.getElementById("image")

// ON / OFF button
let redBtn = document.getElementById("redBtn")
let signal = document.getElementById("signal")

// CHANNEL buttons (1 to 6)
const allBtns = document.getElementsByClassName("btn")
let arrayBtns = Array.from(allBtns)

const tvBtns = document.getElementsByClassName("btnTV")
let arrayTvBtns = Array.from(tvBtns)

// STAMPS (channel, time, date)    .innerHTML = Date()">
let displayChannelScreen = document.getElementById("displayChannelScreen")
let displayChannel = document.getElementById("displayChannel")
let displayDay = document.getElementById("displayDay")
const currentDate = new Date().toDateString().slice(3, 10);
let displayTime = document.getElementById("displayTime")
const currentTime = new Date().toTimeString().slice(0, 8);

// VOLUME functions
let moreVolume = document.getElementById("volPlus")
let moreTvVolume = document.getElementById("volTvPlus")

let lessVolume = document.getElementById("volMinus")
let lessTvVolume = document.getElementById("volTvMinus")

const tvVolBtns = document.getElementsByClassName("levelVol")
let arrayTvVolBtns = Array.from(tvVolBtns)


/*
On-off button toggles between blackscreen and static.
It blocks other channels (when tv is off channel buttons don´t work)
*/


const onOff = function() {
  let lastClass = image.classList[image.classList.length - 1];
  // The red button removes last class and adds a new one (images are loaded as background-image)
  // Temporary onscreen message display
  if (lastClass == "blackScreen") {
    image.classList.remove("blackScreen")
    image.classList.add("static")
    displayChannelScreen.innerHTML = 'NO CHANNEL';
    setTimeout(function () { displayChannelScreen.innerHTML = '' }, 3000);
    signal.classList.add("redDot");
    displayDay.innerHTML = currentDate + " 1999";
    displayTime.innerHTML = currentTime;
    displayChannel.innerHTML = '   ---   ';
  } else if (lastClass != "blackScreen") {
    // Small standby red light lights up when the TV is on
    image.classList.remove(lastClass)
    image.classList.add("blackScreen");
    signal.classList.remove("redDot");
    signal.classList.remove("greenDot");
    displayDay.innerHTML = "";
    displayTime.innerHTML = "";
    displayChannel.innerHTML = "";
    displayChannelScreen.innerHTML = '';
    const btn = document.getElementsByClassName("levelVol")
    let arraybtn = Array.from(btn)
    arraybtn.forEach(item => item.classList.remove("onVol"))
    count = 0;
  }
}

redBtn.addEventListener("click", onOff)
mainBtn.addEventListener("click", onOff)




// const allNums = document.getElementsByClassName("numbers")
// let arrayNums = Array.from(allNums)


// Mapping an array of channels, each button removes last class and adds a new one (with its picture)
// Small red light, changes to green when any channel is selected
// The selected channel name is displayed for 3 seconds after clicking the button

arrayBtns.map(
  item => item.addEventListener("click", () => {
    let lastClass = image.classList[image.classList.length - 1];
  
    if (lastClass != "blackScreen") {
      image.classList.remove(lastClass);
      signal.classList.remove("redDot");
      signal.classList.add("greenDot");
      displayDay.innerHTML = currentDate + " 1999";
      displayTime.innerHTML = currentTime;
  
      /*
      For each item(btn), slicing the last character of theit id (i.e. btn1)
      we get the number we add to the class with the new image and to the onscreen display innerHTML texts
      */
      let num = item.id.slice(-1)
  
      image.classList.add("ch" + num);
      displayChannel.innerHTML = 'CHANNEL ' + num;
      displayChannelScreen.innerHTML = 'CHANNEL ' + num;
      setTimeout(function () { displayChannelScreen.innerHTML = '' }, 3000);
  
    }
  }))

arrayTvBtns.map(item => item.addEventListener("click", () => {
  let lastClass = image.classList[image.classList.length - 1];

  if (lastClass != "blackScreen") {
    image.classList.remove(lastClass);
    signal.classList.remove("redDot");
    signal.classList.add("greenDot");
    displayDay.innerHTML = currentDate + " 1999";
    displayTime.innerHTML = currentTime;

    /*
    For each item(btn), slicing the last character of theit id (i.e. btn1)
    we get the number we add to the class with the new image and to the onscreen display innerHTML texts
    */
    let num = item.id.slice(-1)

    image.classList.add("ch" + num);
    displayChannel.innerHTML = 'CHANNEL ' + num;
    displayChannelScreen.innerHTML = 'CHANNEL ' + num;
    setTimeout(function () { displayChannelScreen.innerHTML = '' }, 3000);

  }
}))




// VOLUME (remote and tv)

let count = 1;
const volumeUp = function () {
  let lastClass = image.classList[image.classList.length - 1];
  if (lastClass != "blackScreen") {
    let btn = document.getElementById("lvl" + count);
    count += 1;
    btn.classList.add("onVol");
  }
}
moreVolume.addEventListener("click", volumeUp)
moreTvVolume.addEventListener("click", volumeUp)

const volumeDown = function () {
  let lastClass = image.classList[image.classList.length - 1];
  if (lastClass != "blackScreen") {
    let btn = document.getElementById("lvl" + count);
    count -= 1;
    btn.classList.remove("onVol");
  }
}
lessVolume.addEventListener("click", volumeDown)
lessTvVolume.addEventListener("click", volumeDown)

