import _ from "lodash";
import myName from "./myName.js";
import "./style.css";
import OdinIcon from "./odin-icon.svg";

function component() {
	const element = document.createElement("div");

	element.innerHTML = _.join(["Hello", "webpack."], " ");
	element.innerHTML += `<br>${myName("John")}`;
	element.classList.add("hello");

	const myOdinIcon = new Image();
	myOdinIcon.src = OdinIcon;

	element.appendChild(myOdinIcon);

	return element;
}

document.body.appendChild(component());
