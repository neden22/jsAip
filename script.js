addEventListener('load', (event) =>{
fetchData()
})

async function fetchData() {
    const userIP = await fetch ('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(result => {
        return result
    })
    .catch(error => console.error('Could not retrieve IP address.', error))

    console.log(userIP);
}