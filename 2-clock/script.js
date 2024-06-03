const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate(){
    const now = new Date()
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds/60) *360)+90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const min = now.getMinutes()
    const minDegrees = ((min/60)*360)+90
    minHand.style.transform = `rotate(${minDegrees}deg)`

    const hour = now.getHours()
    const hourDegrees = ((hour/12)*360)+90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

const clockFace = document.querySelector(".clock-face")
for(i = 1; i <13; i++){
    let div = document.createElement("div")
    div.classList.add("number")
    div.classList.add(`n${i}`)
    div.innerHTML = i
    clockFace.appendChild(div)
}

const numbers = document.getElementsByClassName(".number")
for( i = 0; i < numbers.length(); i++){
    console.log(numbers[i])
}



setInterval(setDate, 1000)