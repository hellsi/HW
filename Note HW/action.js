document.querySelector('.plus_note').onclick = onePlus;


var allNotes = document.querySelector('.table');
var note = document.getElementsByClassName('notes');

function randomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function onePlus (element) {
	var newNote = document.createElement('div');
	newNote.setAttribute("class","notes");
	newNote.style.backgroundColor=randomColor();

	var newTitle = document.createElement('textarea');
	newTitle.setAttribute("class","title_note");
	newTitle.setAttribute("placeholder","Назва");
	

	var newDelete = document.createElement('button');
	newDelete.setAttribute("class","delete_note");

	var newConTent = document.createElement('textarea');
	newConTent.setAttribute("class","con-tent_note");
	newConTent.setAttribute("placeholder","Не забути");
	newNote.appendChild(newTitle);
	newNote.appendChild(newDelete);
	newNote.appendChild(newConTent);
	allNotes.appendChild(newNote);
	
}

document.onmousedown = function(e) {

  var remElem = e.target;

  if (!remElem.classList.contains('notes')) return;

  var coords, shiftX, shiftY;

  remStart(e.clientX, e.clientY);

  document.onmousemove = function(e) {
    moveAt(e.clientX, e.clientY);
  };

  remElem.onmouseup = function() {
    finishDrag();
  };


  function remStart(clientX, clientY) {

    shiftX = clientX - remElem.getBoundingClientRect().left;
    shiftY = clientY - remElem.getBoundingClientRect().top;

    remElem.style.position = 'fixed';

    document.body.appendChild(remElem);

    moveAt(clientX, clientY);
  };

  function finishDrag() {
    
    remElem.style.top = parseInt(remElem.style.top) + pageYOffset + 'px';
    remElem.style.position = 'absolute';

    document.onmousemove = null;
    remElem.onmouseup = null;
  }

  function moveAt(clientX, clientY) {
    var newX = clientX - shiftX;
    var newY = clientY - shiftY;
    
    var newBottom = newY + remElem.offsetHeight;

    remElem.style.left = newX + 'px';
    remElem.style.top = newY + 'px';
  }

  return false;
}