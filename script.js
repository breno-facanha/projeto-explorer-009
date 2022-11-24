let randomNumber = Math.round(Math.random() *10)

// teste numero randomico | log
console.log(randomNumber)

let tentativas = 1

function handleTryClick(event) {
    event.preventDefault()

    let inputNumber = document.querySelector("#inputNumer")

    if(Number(inputNumber.value) == randomNumber){
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")
        document.querySelector("h2").innerText = `Acertou em ${tentativas} tentativas!`
    }

    inputNumber.value = ""

    
    tentativas++

}

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
    tentativas = 1
    randomNumber = Math.round(Math.random() *10)
    console.log(randomNumber)
})
