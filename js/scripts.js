$(document).ready(function(){



  $(".breakfast h1").mouseover(function(){
    $(this).css("color", "black");
    $(".breakfast").css( "opacity",0.4);

  });
  $(".lunch h1").mouseover(function(){
    $(this).css("color", "black");
    $(".lunch").css( "opacity",0.4);

  });
  $(".dinner h1").mouseover(function(){
    $(this).css("color", "black");
    $(".dinner").css( "opacity",0.4);

  });

   $(".menu").click(function(){
     alert("hi");
   });

   $(".embtn").click(function(){
     var email = $("#email").val();

     alert( "hello visitor, you have successifully been subscribed.. " +email);

   });

});