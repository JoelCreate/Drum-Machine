function playSound() {
    const audio = document.querySelector(`audio[data-drum="${e.target.dataset.drum}"]`)
    const tap = document.querySelector(`.tap[data-drum="${e.target.dataset.drum}"]`)
    if (!audio) return // stop fuction all together
    audio.currentTime = 0 //plays sound over and over
    audio.play()
    tap.classList.add('playing')
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return
    this.classList.remove('playing')
}

const taps = document.querySelectorAll('.tap')
taps.forEach(tap => tap.addEventListener('trasitionend', removeTransition))

window.addEventListener("touchstart", playSound)

