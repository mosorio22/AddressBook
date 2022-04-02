//function to add users to page
function addUsers(users) {
	window.data = users;
	//create new profile divs and append to wrapper div
	for (let i = 0; i < users.length; i++) {
		let newDiv = document.createElement("div");
		newDiv.className = "user-profile";
		let newHeader = document.createElement("a");
		newHeader.className = "user-name";
		newHeader.innerText = users[i]["name"]["first"] + " " + users[i]["name"]["last"];
		newDiv.appendChild(newHeader);
		let newAddress = document.createElement("p");
		newAddress.className ="user-address";
		newAddress.innerText = users[i]["location"]["street"]["number"] + " " + users[i]["location"]["street"]["name"];
		newDiv.appendChild(newAddress);
		document.getElementById("wrapper").appendChild(newDiv);
	}
}

//randomuser call with 50 users and seed "book" to always get same results
fetch('https://randomuser.me/api/?results=50&seed=book')
	.then(response => response.json())
    .then(data => addUsers(data["results"]))
    .catch((error) => {
		console.error(error)
	});
