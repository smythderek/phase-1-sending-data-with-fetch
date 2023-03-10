// // Add your code here

function submitData(name, email) {
    const configObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'name': name,
            'email': email
        })
    }
    return fetch('http://localhost:3000/users', configObject)
    .then(response => response.json())
    .then(data => addNewContact(data.id))
    .catch(error => document.body.innerHTML = error.message)
}

function addNewContact(newID) {
    document.getElementsByTagName("body")[0].innerHTML = newID;
}