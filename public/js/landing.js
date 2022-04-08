//function to add users to page
function addUsers(users) {
	const size = users.length;
	//create new profile divs and append to wrapper div
	let newDiv = document.createElement("div");
	newDiv.className = "user-profile-info";
	let newAnchor = document.createElement("a");
	newAnchor.className = "user-name";
	let newAddress = document.createElement("p");
	newAddress.className ="user-address";
	let wrapper = document.getElementById("wrapper");
	//store clones in document fragment to only append to dom once
	let documentFragment = document.createDocumentFragment();
	for (let i = 0; i < size; i++) {
		let nameDiv = newDiv.cloneNode(true);
		let addressDiv = newDiv.cloneNode(true);
		let anchorClone = newAnchor.cloneNode(true);
		anchorClone.text = `${users[i].name.first} ${users[i].name.last}`;
		anchorClone.href = "description?username=" + users[i].name.first + "|" + users[i].name.last + "&phone=" + users[i].cell + "&pic=" + encodeURIComponent(users[i].picture.large);
		nameDiv.appendChild(anchorClone);
		let addressClone = newAddress.cloneNode(true);
		addressClone.innerText = `${users[i].location.street.number} ${users[i].location.street.name}`;
		addressDiv.appendChild(addressClone);
		documentFragment.appendChild(nameDiv);
		documentFragment.appendChild(addressDiv);
	}
	wrapper.appendChild(documentFragment);
}

//randomuser call with 50 users and seed "book" to always get same results
fetch('https://randomuser.me/api/?results=50&seed=book')
	.then(response => response.json())
    .then(data => addUsers(data["results"]))
    .catch((error) => {
		console.error(error)
	});
