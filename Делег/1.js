// var table = document.getElementById("table");

// table.addEventListener("click", changeColor);
// table.addEventListener("dblclick", changeColorRow);

// var current;

// function changeColor (e){
//   if (e.target.classList.contains("th")) {
//     if (current) {
//       current.style.background = 'none';
//     }
//   e.target.style.backgroundColor = 'aqua';
//   current = e.target;
//   }
// }

// function changeColorRow (e) {
//   if (e.target.classList.contains("th")) {
//     if (current) {
//       current.style.background = 'none';
//     }
//   e.target.parentElement.style.backgroundColor = 'aqua';
//   current = e.target.parentElement;
//   }
// }




var $current;

$("#table").on("click",".th", function (e){

    if ($current) {
      $current.css("background", "none");
    }
  $(this).css("backgroundColor","aqua");
  $current = $(this);
});

$("#table").on("dblclick",".row", function (e){
    if ($current) {
      $current.css("background", "none");
    }
  $(this).css("backgroundColor","aqua");
  $current = $(this);
});

































