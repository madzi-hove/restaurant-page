// import statements
import "../css/jwcomeau-reset.css";
import "../css/style.css";
import Image from "../images/amirali-mirhashemian-5tC2YOVXE9Y-unsplash.jpg";

const body = document.querySelector("body");
const contentContainer = document.querySelector("#content");

const header = document.createElement("header");
const mainHeading = document.createElement("h1");
header.classList.add("header");
mainHeading.classList.add("main-heading");

mainHeading.innerHTML = `<span class="heading-a">It's morning all day </span><span class="heading-b">at</span><span class="heading-c">The Breakfast Club</span>`;

header.appendChild(mainHeading);
body.appendChild(header);
const mainImage = new Image();
mainImage.src = Image;
mainImage.classList.add("img");
contentContainer.appendChild(mainImage);
