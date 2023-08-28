
const sortArr = (x, y) => {
    if (x.first_name < y.first_name) {return -1;}
    if (x.first_name > y.first_name) {return 1;}
    return 0;
}



const getUsers = async () => {
    const response1 = await fetch('https://reqres.in/api/users')
    const response2 = await fetch('https://reqres.in/api/users?page=2')

    try {
        const result1 = await response1.json()
        const result2 = await response2.json()

        const users1 = result1.data
        const users2 = result2.data

        const allUsers = [...users1, ...users2].sort(sortArr)

        console.log(allUsers)

        let data = ''

        allUsers.map((el) => {
            data +=`<li class="user">
            <div class="user__name">
                
                <p class="user__name-first">${el.first_name}</p>
                 &nbsp
                <p class="user__name-last">${el.last_name}</p>
            </div>
          
            <p class="user__email">${el.email}</p>
            <img src=${el.avatar} alt="avatar" class="user__avatar">
        </li>`
        })

        document.querySelector('.container').innerHTML=data
       
        





    } catch (err) {
        console.log(err)
    }
}

getUsers()


