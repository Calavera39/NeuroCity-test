const triangle = document.querySelector('.triangle')
const circle = document.querySelector('.circle')
const square = document.querySelector('.square')
const rectangle = document.querySelector('.rectangle')

triangle.addEventListener('click', () => {
    triangle.classList.toggle('active')
})

circle.addEventListener('click', () => {
    circle.classList.toggle('active')
})

square.addEventListener('click', () => {
    square.classList.toggle('active')
})

rectangle.addEventListener('click', () => {
    rectangle.classList.toggle('active')
})