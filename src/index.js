import _ from "lodash";
import myName from "./myName.js";
import "./style.css";

function component() {
	const element = document.createElement("div");

	element.innerHTML = _.join(["Hello", "webpack."], " ");
	element.innerHTML += `<br>${myName("John")}`;
	element.classList.add("hello");

	return element;
}

document.body.appendChild(component());
