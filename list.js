var listItems = []; //Variable to store the shopping list items.
var bin = "60721709ceba857326729876";

$(document).ready(function(){
  //Get the current list without any user interactions
  var list = $.get("https://api.jsonbin.io/v3/b/"+bin+"/latest");
  list.done(function(response){
    listItems = response.record;
    showList();
  })
  
  list.fail(function(){
    $("body").text("ERROR!");
  })
  
  //Handler for the "Delete Checked Item" button
  $("#btn-delete").click(function(){
    //Return if no radio buttons are checked.
    if(!$( ".delete-radio:checked" ).val())return;
    //Get the value for the checked radio button
    var toDelete = $( ".delete-radio:checked" ).val();
    //Remove the index of the checked radio button from the array.
    listItems.splice(toDelete,1);
    updateList();
  })
  
  //Handler for the "Add New Items" button 
  $("#add-form").submit(function(){
    event.preventDefault();
    //Set the two form values to variables just for convenience
    var item = $("#item").val();
    var quantity = $("#quantity").val();
    //Basic error checking
    if(item.length==0)return;
    if(!$.isNumeric(quantity))return;
    
    //Add the new item to the array
    listItems[listItems.length] = {'item': item, 'quantity': quantity};
    updateList();
    $("#item").val("");
    $("#quantity").val(1);
  });
  
  //Write the JSON object to the bin
  function updateList(){
    //Add the Content Type header because  the documentation says I have to.
    $.ajaxSetup({
      headers: {
        'Content-Type': "application/json",
      }
    });
    //Put the new JSON object into the bin, overwriting what's there.
    var listUpdate = $.ajax("https://api.jsonbin.io/v3/b/"+bin, {"type": "PUT", "data": JSON.stringify(listItems)});
    
    //Update the listItems object and reshow the list
    listUpdate.done(function(response){
      listItems = response.record;
      showList();
    })
    //Clear the page if a failure occurs.
    listUpdate.fail(function(response){
      $("body").text("ERROR!");
      console.log(response);
    }) 
  }
  
  //Build the shopping list from our array
  function showList(){
    $("tbody").empty(); //Delete all table cells.
    for (var i=0; i<listItems.length; i++){
      $("tbody").append('<tr><td><input type="radio" class="delete-radio" id="delete['+i+']" name="delete" value='+i+'></td><td>'+listItems[i].item+'</td><td>'+listItems[i].quantity+'</td></tr>');
      
    }
  }
  
})