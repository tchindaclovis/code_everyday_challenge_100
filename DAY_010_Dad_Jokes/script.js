let  jokeEl = document.getElementById('joke')
let jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

    generateJoke()


//USING ASYNC/AWAIT

async function generateJoke(){
    let config = {
        headers:{
            Accept: 'application/json',
         }, 
    }

    let res = await fetch('https://icanhazdadjoke.com',config)

    let data = await res.json()

    jokeEl.innerHTML=data.joke
}


//USING .then()

// function generateJoke(){
//     let config = {
//         headers:{
//             Accept: 'application/json',
//          }, 
//     }

//     fetch('https://icanhazdadjoke.com',config).then(res => res.json()).then(data => {
//         jokeEl.innerHTML=data.joke
//     })
// }