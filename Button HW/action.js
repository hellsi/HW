document.querySelector('.firstChild').onclick = first;
document.querySelector('.lastChild').onclick = last;
document.querySelector('.nextSibling').onclick = next;
document.querySelector('.previousSibling').onclick = previous;
document.querySelector('.newElementLast').onclick = newElementLast;
document.querySelector('.newElementFirst').onclick = newElementFirst;
document.querySelector('.deleteCurrentElement').onclick = deleteCurrentElement;
document.querySelector('.replaceCurrentElement').onclick = replaceCurrentElement;

var allElements = document.querySelector('.squares');
var colorElement = document.getElementsByClassName('sqr');
var currentElement;

function markCurrent (element) {
	for (var i = 0; i < colorElement.length; i++) {
		colorElement[i].style.backgroundColor="aqua";
	}
	element.style.backgroundColor="red";
	currentElement = element;
}

function addDiv (element) {
	for (var i = 0; i < colorElement.length; i++) {
		colorElement[i].style.backgroundColor="aqua";
	}
	var newDiv = document.createElement('div');
	newDiv.setAttribute("class","sqr");
	newDiv.setAttribute("style","background-color:green");
	newDiv.appendChild(document.createTextNode(''));
	return newDiv;
}
function markCurrentElse (element) {
	currentElement = element;
}

function first (){
	markCurrent(allElements.firstElementChild);
}


function last (){
	markCurrent(allElements.lastElementChild);
}

function next (){
	if (currentElement == allElements.lastElementChild) {
		alert("Oops");
	}
	else if (currentElement == undefined) {
		alert("Oops");
	}
	markCurrent(currentElement.nextElementSibling);

}

function previous () {
	if (currentElement == allElements.firstElementChild) {
		alert("Oops");
	}
	else if (currentElement == undefined) {
		alert("Oops");
	}
	markCurrent(currentElement.previousElementSibling);
}

function newElementLast () {
	addDiv();
	allElements.appendChild(addDiv());
	markCurrentElse(allElements.lastElementChild);
}
function newElementFirst () {
	addDiv();
	var existingChild = allElements.children[0];
	allElements.insertBefore(addDiv(), existingChild);
	markCurrentElse(allElements.firstElementChild);
}
function deleteCurrentElement () {
	allElements.removeChild(currentElement);
}
function replaceCurrentElement () {
	var markSpecial = currentElement;
	addDiv();
	allElements.replaceChild(addDiv(), currentElement);
}
