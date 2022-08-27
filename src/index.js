import _ from "lodash";
import myName from "./myName.js";
import "./style.css";
import OdinIcon from "./odin-icon.svg";
import XMLData from "./data.xml";
import CSVData from "./data.csv";
import TOMLData from "./data.toml";
import YAMLData from "./data.yaml";
import JSON5Data from "./data.json5";

console.log(JSON5Data.title);
console.log(JSON5Data.owner.name);
console.log(JSON5Data.owner.organization);

console.log(TOMLData.title);
console.log(TOMLData.owner.name);
console.log(TOMLData.owner.organization);

console.log(YAMLData.title);
console.log(YAMLData.owner.name);
console.log(YAMLData.owner.organization);

function component() {
	const element = document.createElement("div");

	element.innerHTML = _.join(["Hello", "webpack."], " ");
	element.classList.add("hello");

	const element2 = document.createElement("div");
	element2.innerHTML = myName("John");
	element2.classList.add("hello2");

	const myOdinIcon = new Image();
	myOdinIcon.src = OdinIcon;

	element.appendChild(myOdinIcon);
	element.appendChild(element2);

	console.log(XMLData);
	console.log(CSVData);

	return element;
}

document.body.appendChild(component());
