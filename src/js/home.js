import homePage from "../html/home.html";

function loadPage() {
	document.querySelector("#Content").innerHTML = homePage;
}

export { loadPage };
