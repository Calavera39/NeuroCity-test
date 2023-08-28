const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const container = document.querySelector('.container')
const quantity = document.querySelector('.quantity')



const randomNumber = random(10, 100)
console.log(randomNumber)

for (let i = 0; i < randomNumber; i++) {
    container.innerHTML += ` <div class="square"></div>`
}
