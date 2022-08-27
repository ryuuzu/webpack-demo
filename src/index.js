import _ from "lodash";
import myName from "./myName.js";

function component() {
	const element = document.createElement("div");

	element.innerHTML = _.join(["Hello", "webpack."], " ");
	element.innerHTML += `<br>${myName("John")}`;

	return element;
}

document.body.appendChild(component());
