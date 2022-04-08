function populateProfile() {
	//get query param values
	const params = new Proxy(new URLSearchParams(window.location.search), {
	  get: (searchParams, prop) => searchParams.get(prop),
	});
	let userName = params.username.split("|").join(" ");
	let phoneNumber = params.phone;
	let userImage = decodeURIComponent(params.pic);
	let userAddress = params.address.split("|").join(" ");
	let userAge = params.age;
	document.querySelector(".profile-image").src = userImage;
	document.querySelector(".profile-name").innerText = userName;
	document.querySelector(".profile-phone").innerText = phoneNumber;
	document.querySelector(".profile-age").innerText = userAge;
	document.querySelector(".profile-address").innerText = userAddress;
}

populateProfile();