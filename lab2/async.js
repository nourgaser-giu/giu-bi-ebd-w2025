function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message)
    }, delay)
}

delayedMessage("Hello world (sorry I'm late)", 1000)

const getDataFromServer = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await data.json();
    const firstUser = users[0];
    console.log(`First user's name is: ${firstUser.name}`)
}

getDataFromServer();