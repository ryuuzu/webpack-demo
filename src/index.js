import _ from "lodash";
import myName from "./myName.js";
import printMe from "./print.js";
import "./style.css";
import OdinIcon from "./odin-icon.svg";
import XMLData from "./data.xml";
import CSVData from "./data.csv";
import TOMLData from "./data.toml";
import YAMLData from "./data.yaml";
import JSON5Data from "./data.json5";

console.log("------------------ Data Examples ------------------");
console.log(JSON5Data.title);
console.log(JSON5Data.owner.name);
console.log(JSON5Data.owner.organization);

console.log(TOMLData.title);
console.log(TOMLData.owner.name);
console.log(TOMLData.owner.organization);

console.log(YAMLData.title);
console.log(YAMLData.owner.name);
console.log(YAMLData.owner.organization);
console.log("---------------------------------------------------");

function component() {
	const element = document.createElement("div");
	const btn = document.createElement("button");

	element.innerHTML = _.join(["Hello", "webpack."], " ");
	element.classList.add("hello");

	const element2 = document.createElement("div");
	element2.innerHTML = myName("John");
	element2.classList.add("hello2");

	const myOdinIcon = new Image();
	myOdinIcon.src = OdinIcon;

	btn.innerHTML = "Click me and check the console!";
	btn.onclick = printMe;

	element.appendChild(myOdinIcon);
	element.appendChild(element2);
	element.appendChild(btn);

	console.log("XML and CSV Data Examples:");
	console.log(XMLData);
	console.log(CSVData);
	console.log("--------------------------");

	return element;
}

document.body.appendChild(component());
