$(document).ready(function(){
   $("#toggler").click(function(){
     $(".card").toggle();
   });
   
    $("#name").change(function(){
      var name = $("#name").val();
      $("h1").text("Hello, "+name+"!");
    });
    
    $("#noun1").change(function(){
      var noun1 = $("#noun1").val();
      $("h2").text("You smell like a "+noun1+". I am just kidding as I am learning to have some fun with Javascript and JQuery!");
    
    });
   
    $("#color").change(function(){
      var color = $("#color").val();
      var color_class = "";
      if(color == "red") color_class = "text-danger";
      if(color == "green") color_class="text-success";
      
      $("h1").removeClass();
      if(color_class != "")
        $("h1").addClass(color_class);
    });
    
  });