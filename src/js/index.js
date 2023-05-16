// import statements
import "../css/jwcomeau-reset.css";
import "../css/style.css";
import image from "../images/roman-matovsky-4NdNhu9HxbE-unsplash.jpg";

const body = document.querySelector("body");
const contentContainer = document.createElement("main");

const header = document.createElement("header");

function headerComponent() {
	const mainHeading = document.createElement("h1");
	header.classList.add("header");
	mainHeading.classList.add("main-heading");
	mainHeading.innerHTML = `<span class="heading-a">It's morning all day </span><span class="heading-b">at</span><span class="heading-c">The Breakfast Club</span>`;

	header.appendChild(mainHeading);

	return header;
}

function imageComponent() {
	const mainImage = new Image();
	mainImage.src = image;
	mainImage.classList.add("img");

	return mainImage;
}

function buttonComponent() {
	const buttonContainer = document.createElement("div");
	buttonContainer.classList.add("button-container");
	makeButton(buttonContainer);
	return buttonContainer;
}

function makeButton(buttonContainer) {
	const buttonText = ["Home", "Menu", "Contact"];
	buttonText.forEach(label => {
		const button = document.createElement("div");
		button.classList.add("btn");
		buttonContainer.appendChild(button);
		button.innerHTML = `<p class="button-text">${label}</p>`;
	});
}

body.append(headerComponent());
body.append(imageComponent());
body.append(buttonComponent());
body.append(contentContainer);
