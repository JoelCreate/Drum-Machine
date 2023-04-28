const yellow = document.getElementById("tap1")
const orange = document.getElementById("tap2")
const pink = document.getElementById("tap3")
const blue = document.getElementById("tap4")
const grey = document.getElementById("tap5")
const purple = document.getElementById("tap6")
const green = document.getElementById("tap7")
const red = document.getElementById("tap8")
const teal = document.getElementById("tap9")

yellow.addEventListener("touchstart", function (){
    const djHit = new Audio("sounds/djHit.wav")
    djHit.play()
})

orange.addEventListener("touchstart", function (){
    const djScratch = new Audio("sounds/djScratch.wav")
    djScratch.play()
})

pink.addEventListener("touchstart", function (){
    const cymbal = new Audio("sounds/cymbal.wav")
    cymbal.play()
})

blue.addEventListener("touchstart", function (){
    const clap = new Audio("sounds/clap.wav")
    clap.play()
})

grey.addEventListener("touchstart", function (){
    const snare = new Audio("sounds/snare.wav")
    snare.play()
})

purple.addEventListener("touchstart", function (){
    const hiTom = new Audio("sounds/hiTom.wav")
    hiTom.play()
})

green.addEventListener("touchstart", function (){
    const deepBass = new Audio("sounds/deepBass.wav")
    deepBass.play()
})

red.addEventListener("touchstart", function (){
    const danceBass = new Audio("sounds/danceBass.wav")
    danceBass.play()
})

teal.addEventListener("touchstart", function (){
    const lowTom = new Audio("sounds/lowTom.wav")
    lowTom.play()
})

