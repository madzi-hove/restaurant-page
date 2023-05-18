// import statements
import "../css/jwcomeau-reset.css";
import "../css/home.css";
import "../css/menu.css";
import "../css/contact.css";
import "../css/style.css";
import image from "../images/roman-matovsky-4NdNhu9HxbE-unsplash.jpg";
import { loadPage as homePage } from "./home";
import { loadPage as menuPage } from "./menu";
import { loadPage as contactPage } from "./contact";

class App {
	body = document.querySelector("body");
	constructor() {
		this.displayPage();
		document
			.querySelector(".button-container")
			.addEventListener("click", e => this.tabSwitch(e.target));
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
			const button = document.createElement("a");
			button.classList.add(`${label}`);
			button.classList.add("btn");
			buttonContainer.appendChild(button);
			button.innerText = `${label}`;
		});
	}

	contentComponent() {
		const contentContainer = document.createElement("main");
		contentContainer.id = "Content";

		return contentContainer;
	}

	footerComponent() {
		const homePage = `https://github.com/madzi-hove`;
		const odinLink = `https://www.theodinproject.com`;
		const footer = document.createElement("footer");
		const paragragh = document.createElement("p");

		footer.classList.add("attribution");
		paragragh.classList.add("footer__text");
		footer.appendChild(paragragh);

		paragragh.innerHTML = `Project by <a class="link" target="_blank" title="Opens in new tab" href="${odinLink}">The Odin Project</a>, coded by <a class="link" target="_blank" title="Opens in new tab" href="${homePage}">Madzi Hove</a>`;

		return footer;
	}

	activeTabOnLoad() {
		const activeBtn = document.querySelector(".Home");
		activeBtn.classList.add("active");
		homePage();
	}

	displayPage() {
		this.body.append(this.headerComponent());
		this.body.append(this.imageComponent());
		this.body.append(this.buttonComponent());
		this.body.append(this.contentComponent());
		this.body.append(this.footerComponent());
		this.activeTabOnLoad();
	}

	removeActiveClass() {
		const btns = document.querySelectorAll(".btn");
		btns.forEach(btn => {
			if (btn.classList.contains("active")) {
				btn.classList.remove("active");
			}
		});
	}

	tabSwitch = target => {
		console.log(target);
		if (target.innerText === "Home") {
			this.removeActiveClass();
			target.classList.add("active");
			homePage();
		}
		if (target.innerText === "Menu") {
			this.removeActiveClass();
			target.classList.add("active");
			menuPage();
		}
		if (target.innerText === "Contact") {
			this.removeActiveClass();
			target.classList.add("active");
			contactPage();
		}
	};
}

const app = new App();
