function addUsers(users) {
	console.log(users);
}

fetch('https://randomuser.me/api/?results=50&seed=book')
        .then(response => response.json())
        .then(data => addUsers(data))
        .catch(console.error("randomuser call failed"));