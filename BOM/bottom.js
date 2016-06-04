document.querySelector('.properties').onclick = properties;
document.querySelector('.window_open').onclick = windowOpen;
document.querySelector('.use').onclick = use;
document.querySelector('.resize').onclick = resize;
document.querySelector('.reduce').onclick = reduce;
// document.querySelector('.six').onclick = newElementFirst;
// document.querySelector('.seven').onclick = deleteCurrentElement;
// document.querySelector('.eight').onclick = replaceCurrentElement;
// document.querySelector('.nine').onclick = replaceCurrentElement;

function properties () {
	for (var key in window) {
		console.log(key + " " + window[key]);
	}
}
function windowOpen () {
	window.open("https://new.vk.com/feed","n10tka");
}
function use () {
	var element = window.open("https://new.vk.com/feed","n10tka");
	for (var key in element) {
		element.window.console.log(key + " " + element[key]);
	}
}
function resize () {
	var element = window.open("https://new.vk.com/feed","n10tka",'width=500,height=500');
	element.resizeTo(500,500);
}
function reduce () {
	var element = window.open("https://new.vk.com/feed","n10tka",'width=500,height=500');
	element.resizeBy(20,20);
}
