const jokeText = document.getElementById('joke')

const jokeBtn = document.getElementById('jokeBtn')


jokeBtn.addEventListener('click', getJoke)


getJoke()


async function getJoke() {

    const config = {
        headers: {
            'Accept': 'application/json'
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeText.innerHTML = data.joke
}

//     fetch('https://icanhazdadjoke.com', config)
//         .then((result) => result.json())
//         .then((data) => {
//             jokeText.innerHTML = data.joke
//         })

// }