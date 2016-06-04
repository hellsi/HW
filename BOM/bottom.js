document.querySelector('.properties').onclick = properties;
document.querySelector('.window_tab').onclick = openTab;
document.querySelector('.properties_new_tab').onclick = propNewTab;
document.querySelector('.newWin').onclick = openWin;
document.querySelector('.resize_to').onclick = resizeBefore;
document.querySelector('.resize_by').onclick = resizeLater;
document.querySelector('.scroll_new').onclick = scrollNew;
document.querySelector('.scroll_current').onclick = scrollCurrent;
document.querySelector('.focus').onclick = focusWindow;
document.querySelector('.close_print').onclick = closeAndPrint;

function properties () {
	for (var key in window) {
		console.log(key + " " + window[key]);
	}
}
function openTab () {
	return window.open("","");

}
function propNewTab () {
	var element = openTab ();
	for (var key in element) {
		element.window.console.log(key + " " + element[key]);
	}
}
// var newWin;
function openWin() {
   return newWin = window.open("","",'width=100,height=100');
}
function resizeBefore () {
	openWin();
	newWin.resizeTo(500,500);
}
function resizeLater () {
	newWin.resizeBy(500,500);
}
function scrollNew () {
	var element = window.open("https://new.vk.com/feed","n10tka",'width=500,height=500'); // з усім вийшло поборотись, а тут на жаль я так розумію заважає безпека сторінки :(
	element.scrollBy(100,0); 
}
function scrollCurrent () {
	window.scrollTo(200,250);
}
function focusWindow () {
	openWin();
	newWin.focus(); 
	setTimeout(function() {
		newWin.blur();
		alert("Focus is lost");
	}, 3000);

};
function closeAndPrint () {
	newWin.close();
	window.print();
};
