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

function getPositionElement (max) {
    var position = 0 + Math.random() * (max - 0);
    position = Math.round(position);
    return position + 'px';
}

function onePlus () {
  var note = new Note();
  note.saveToLocalStorage();
  note.generateHtml();
}

function Note (){
  this.id  = 'id' + (new Date()).getTime();
  this.title = ":)";
  this.text = "Some text";
  this.top = getPositionElement(600);
  this.left = getPositionElement(1000);
  this.color =  randomColor();
}

Note.prototype.generateHtml = function(){
  var currentNote = this;

  // var id = generator.getID();
  var newBox = document.createElement('div');
  newBox.setAttribute("class","box");
  newBox.setAttribute("id", currentNote.id);
  newBox.style.backgroundColor = currentNote.color;
  newBox.style.left = currentNote.left;
  newBox.style.top = currentNote.top;

  newBox.onclick = function (e){
    e.target.focus();
  }

  var newTitle = document.createElement('textarea');
  newTitle.setAttribute("class","title_note");
  newTitle.value = currentNote.title;

  newTitle.onblur = function() {
    currentNote.title = this.value;
    currentNote.saveToLocalStorage();
  }
 
  
  var newDelete = document.createElement('button');
  newDelete.setAttribute("class","delete_note");
  newDelete.onclick = function(){
    newBox.remove();
    localStorage.removeItem(currentNote.id, JSON.stringify(currentNote));
  }


  var newConTent = document.createElement('textarea');
  newConTent.setAttribute("class","con-tent_note");
  newConTent.value = currentNote.text;
  newConTent.onblur = function() {
    currentNote.text = this.value;
    currentNote.saveToLocalStorage();
  }
 

  newBox.appendChild(newTitle);
  newBox.appendChild(newDelete);
  newBox.appendChild(newConTent);
  allNotes.appendChild(newBox);

  newBox.onclick = function (e) {
    e.target.focus();
  }

  return newBox;

}

Note.createNote = function(obj){ 
    var note = new Note();
    note.id = obj.id;
    note.title = obj.title || '';
    note.text = obj.text || '';
    note.top = obj.top || '';
    note.left = obj.left || '';
    note.color = obj.color || getRandomColor();
    return note;
};

Note.prototype.saveToLocalStorage = function(){
    var currentNote = this;
    localStorage.setItem(currentNote.id, JSON.stringify(currentNote));
};

document.onmousedown = function(e) {

  var remElem = e.target;

  // if (!remElem.classList.contains('box')) return;

  var containsNote = false;
  while(remElem != e.curretTarget){
    var isNote = remElem.classList.contains('box');
    if(isNote) {
      containsNote = true;
      break;
    }
    else {
      remElem = remElem.parentElement;
    }
  }
  if(!containsNote) return;

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

    remElem.style.position = 'absolute';
    //document.body.appendChild(remElem);
    moveAt(clientX, clientY);
  };

  function finishDrag() {
    remElem.style.top = parseInt(remElem.style.top) + pageYOffset + 'px';
    remElem.style.left = parseInt(remElem.style.left) + pageXOffset + 'px';
   // remElem.style.position = 'absolute';

    document.onmousemove = null;
    remElem.onmouseup = null;

    var note = Note.createNote(Note.getNodeFromLSById(remElem.id));
        note.top = remElem.style.top;
        note.left = remElem.style.left;
        note.saveToLocalStorage();
  }

  function moveAt(clientX, clientY) {
    var newX = clientX - shiftX- remElem.parentElement.getBoundingClientRect().left;
    var newY = clientY - shiftY - remElem.parentElement.getBoundingClientRect().top;
    
    var newBottom = newY + remElem.offsetHeight;

    remElem.style.left = newX + 'px';
    remElem.style.top = newY + 'px';
  }

  return false;
}

Note.getNodeFromLSById = function(id){
    var noteStr = localStorage.getItem(id);
    return JSON.parse(noteStr);
};

window.onload = function () {
    var deleteFunc = function(){
          allNotes.removeChild(this.parentElement.parentElement);
          delete localStorage[obj.id];
    };
    if(localStorage.length > 0){
        for(var i=0; i < localStorage.length; i++) {
            var keys =  localStorage.getItem(localStorage.key(i));
            var obj = Note.createNote(JSON.parse(keys));
            allNotes.appendChild(obj.generateHtml(deleteFunc));
        }
    }
}