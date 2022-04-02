function populateProfile() {
	//get query param values
	const params = new Proxy(new URLSearchParams(window.location.search), {
	  get: (searchParams, prop) => searchParams.get(prop),
	});
	let userName = params.username.split("|").join(" ");
	let phoneNumber = params.phone;
	let userImage = decodeURIComponent(params.pic);
	document.querySelector(".profile-image").src = userImage;
	document.querySelector(".profile-name").innerText = userName;
	document.querySelector(".profile-phone").innerText = phoneNumber;
}

populateProfile();