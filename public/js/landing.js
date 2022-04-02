function addUsers(users) {
	window.users = users;
}

fetch('https://randomuser.me/api/?results=50&seed=book')
	.then(response => response.json())
    .then(data => addUsers(data["results"]))
    .catch((error) => {
		console.error(error)
	});


if (typeof exports !== 'undefined') {
    module.exports.addUsers = addUsers;
}