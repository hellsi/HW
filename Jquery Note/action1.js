$(".plus_note").click(onePlus); /*+*/

var $allNotes = $(".table"); /*+*/

function onePlus () {
  var note = new Note();
  note.saveToLocalStorage();
  note.generateHtml();
} /*+*/

function Note (){
  this.id  = 'id' + (new Date()).getTime();
  this.title = ":)";
  this.text = "Hello world!";
  this.top = getPositionElement(200);
  this.left = getPositionElement(500);
  this.color =  randomColor();
} /*+*/

function randomColor(){ 
  var colors = {
    red: Math.floor( Math.random() * 256 ),
    green: Math.floor( Math.random() * 256 ),
    blue: Math.floor( Math.random() * 256 )
  };
  
  return colors;
} /*+*/

function getPositionElement (max) {
    var position = Math.round(Math.random() * max);
    return position + 'px';
} /*+*/

Note.prototype.generateHtml = function(){
  var currentNote = this;

  var $newBox = $("<div ></div>")
    .attr("class", "box")
    .attr("id", currentNote.id)
    .css("background-color", currentNote.color)
    .css("left", currentNote.left)
    .css("top", currentNote.top)
    .draggable({
      stop: function() {
          var spe = event.target; /*spe - savePositionElement*/
          currentNote.top = spe.style.top;
          currentNote.left = spe.style.left;
          currentNote.saveToLocalStorage();
      }
    });

  var $newTitle =$("<textarea></textarea>")
    .attr("class", "title_note")
    .val(currentNote.title)
    .blur(function() {
      currentNote.title = this.value;
      currentNote.saveToLocalStorage();
    });

  var $newDelete =$("<button></button>")
    .attr("class", "delete_note")
    .click (function(){
      $newBox.remove();
      localStorage.removeItem(currentNote.id, JSON.stringify(currentNote));
  });

  var $newConTent =$("<textarea></textarea>")
    .attr("class", "con-tent_note")
    .val(currentNote.text)  
    .blur(function() {
      currentNote.text = this.value;
      currentNote.saveToLocalStorage();
    });

  $newBox.click(function (e){
    e.target.focus();
  });
  
  $allNotes.append($newBox);
  $newBox.append($newTitle);
  $newBox.append($newDelete);
  $newBox.append($newConTent);

  return $newBox;
} /*+*/

Note.createNote = function(obj){ 
    var note = new Note();
    note.id = obj.id;
    note.title = obj.title || '';
    note.text = obj.text || '';
    note.top = obj.top || '';
    note.left = obj.left || '';
    note.color = obj.color || getRandomColor();
    return note;
}; /*+*/

Note.prototype.saveToLocalStorage = function(){
    var currentNote = this;
    localStorage.setItem(currentNote.id, JSON.stringify(currentNote));
}; /*+*/

$(document).ready(function () {
    if(localStorage.length > 0){
        for(var i=0; i < localStorage.length; i++) {
            var keys =  localStorage.getItem(localStorage.key(i));
            var obj = Note.createNote(JSON.parse(keys));
            $allNotes.append(obj.generateHtml());
        }
    }
}); /*+*/
