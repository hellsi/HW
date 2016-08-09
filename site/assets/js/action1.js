$(document).ready(function(){

    loadData();

    function loadData(){
        ajax();
    }
    
    function ajax(){
        var $container = $("#home");

        $.ajax({
            url: "../ajax.html"
        })
        .done(function( data ) {
            if ( data ) {
                $container.append(data);
            }
        });
    };

    $(".go").click(function() {
        $(".world").attr("hidden", "hidden"),
        $(".inside").removeAttr("hidden");
    });

    $(".nav_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 250);
    });


    function runEffect() {
      var selectedEffect = $( "fade" );
      var options = {};
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
      $( ".blocks" ).show( selectedEffect, options, 500, callback );
    };


  $( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  });

});

