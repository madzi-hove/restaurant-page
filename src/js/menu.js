import menuPage from "../html/menu.html";

function loadPage() {
	document.querySelector("#Content").innerHTML = menuPage;
}

export { loadPage };
