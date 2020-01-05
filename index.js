const header = document.querySelector("header > h1");

header.textContent = "Fruits & Vegetables Corp";

header.setAttribute("style", "color: red;");


const listOfMenu = document.querySelectorAll("ul > li");

var lastListItem = listOfMenu[2];

lastListItem = lastListItem.getElementsByTagName("a");

lastListItem[0].setAttribute("href", "#vegetables");

lastListItem[0].textContent = "Vegetables";


const mainSection = document.querySelectorAll("main > *");

const mainHolder = mainSection[0].parentElement;

const firstChildMain = mainSection[0];

const secondChildMain = mainSection[1];

mainHolder.removeChild(firstChildMain);

mainHolder.removeChild(secondChildMain);

mainHolder.appendChild(secondChildMain);

mainHolder.appendChild(firstChildMain);

let h2ForContact = document.createElement("h2");

h2ForContact.textContent = "Contact";

mainHolder.insertBefore(h2ForContact, mainSection[0]);

let h2ForAbout = document.createElement("h2");

h2ForAbout.textContent = "About";

mainHolder.insertBefore(h2ForAbout, document.getElementById("about"));

//change to td to th in approporiate places

const tr = document.querySelectorAll("thead > tr");

const th = document.querySelectorAll("thead > tr > td");

const newTh2 = document.createElement("th");

let newTh = document.createElement("th");

for (let i = 0; i < th.length; i++) {

tr[0].removeChild(th[i]);

}

tr[0].appendChild(newTh).textContent = "Name";

tr[0].appendChild(newTh2).textContent = "Email";

const aboutHolder = document.getElementById("about");

aboutHolder.textContent = "";

const newPtag = document.createElement("p");

newPtag.textContent = "We're the best in fruits & vegetables";

aboutHolder.appendChild(newPtag);

const newLinkElement = document.createElement("link");

newLinkElement.setAttribute("rel", "stylesheet");

newLinkElement.setAttribute("href", "main.css");

document.head.appendChild(newLinkElement);
