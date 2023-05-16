// import statements
import "../css/jwcomeau-reset.css";
import "../css/style.css";
import image from "../images/roman-matovsky-4NdNhu9HxbE-unsplash.jpg";
import { loadPage as homePage } from "./home";
import { loadPage as menuPage } from "./menu";
import { loadPage as contactPage } from "./contact";

class App {
	body = document.querySelector("body");
	constructor() {
		this.displayPage();
	}

	headerComponent() {
		const header = document.createElement("header");
		const mainHeading = document.createElement("h1");
		header.classList.add("header");
		mainHeading.classList.add("main-heading");
		mainHeading.innerHTML = `<span class="heading-a">It's morning all day </span><span class="heading-b">at</span><span class="heading-c">The Breakfast Club</span>`;

		header.appendChild(mainHeading);

		return header;
	}

	imageComponent() {
		const mainImage = new Image();
		mainImage.src = image;
		mainImage.classList.add("img");

		return mainImage;
	}

	buttonComponent() {
		const buttonContainer = document.createElement("div");
		buttonContainer.classList.add("button-container");
		this.makeButton(buttonContainer);
		return buttonContainer;
	}

	makeButton(buttonContainer) {
		const buttonText = ["Home", "Menu", "Contact"];
		buttonText.forEach(label => {
			const button = document.createElement("div");
			button.classList.add(`${label}`);
			button.classList.add("btn");
			buttonContainer.appendChild(button);
			button.innerHTML = `<p class="button-text">${label}</p>`;
		});
	}

	contentComponent() {
		const contentContainer = document.createElement("main");
		contentContainer.id = "Content";

		return contentContainer;
	}
	displayPage() {
		this.body.append(this.headerComponent());
		this.body.append(this.imageComponent());
		this.body.append(this.buttonComponent());
		this.body.append(this.contentComponent());
		homePage();
	}
}

const app = new App();
