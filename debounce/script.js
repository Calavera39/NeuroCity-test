const button = document.querySelector('.button')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')


const showElements = () => {
    first.classList.toggle('active')
    second.classList.toggle('active')
    third.classList.toggle('active')
}

function debounce( callback, delay ) {
    let timeout;
    return function() {
        clearTimeout( timeout );
        timeout = setTimeout( callback, delay );
    }
}

button.addEventListener('click', debounce(showElements, 1000))