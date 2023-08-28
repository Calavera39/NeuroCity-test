const form = document.getElementById('form')
const username = document.getElementById('name')
const nubmer = document.getElementById('number')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('passwordConfirm')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    validateForm()   
    
    

})

const hasCapital = (s) => !/^[a-zа-я\d]*$/.test(s);
 

const validateForm = () => {
    const userNameValue = username.value.trim()
    const numberValue = nubmer.value.trim()
    const passwordValue = password.value.trim()
    const passwordConfirmValue = passwordConfirm.value.trim()

    if(userNameValue === '') {
        setErrorMessage(username, 'Поле не должно быть пустым')
    }
    else if (userNameValue.length <= 2 || userNameValue.length >= 31) {
        setErrorMessage(username, 'Имя должно быть от 3 до 30 символов')
    }
    else {
        setSuccessMessage(username)
    }


    if(numberValue === '') {
        setErrorMessage(nubmer, 'Поле не должно быть пустым')
    }
    else if ( numberValue.length <=9 || numberValue.length >= 16) {
        setErrorMessage(nubmer, 'Номер телефона должен быть от 10 до 15 символов')
    }
    else {
        setSuccessMessage(nubmer)
    }

    if(passwordValue === '') {
        setErrorMessage(password, 'Поле не должно быть пустым')
    }
    else if ( passwordValue.length <=7 || passwordValue.length >= 41) {
        setErrorMessage(password, 'Пароль должен быть от 8 до 40 символов')

    
        
    }

    else if(!hasCapital(passwordValue) ) {
        setErrorMessage(password, 'Пароль должен содержать заглавую букву')
    }

    else {
        setSuccessMessage(password)
    }

    if(passwordConfirmValue === '') {
        setErrorMessage(passwordConfirm, 'Поле не должно быть пустым')
    }
    else if (passwordValue != passwordConfirmValue) {
        setErrorMessage(passwordConfirm, 'Пароли должны совпадать')
    }
    else {
        setSuccessMessage(passwordConfirm)
    }

    
}

const setErrorMessage = (input, errorMessage) => {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    formControl.className = 'form__control error'
    small.innerText = errorMessage
}

const setSuccessMessage = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form__control success'

}