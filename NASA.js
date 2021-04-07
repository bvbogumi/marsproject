$(document).ready(function(){
    $("#show").click(function(){
        var apod = $.get("https://api.nasa.gov/planetary/apod?api_key=o5RPlXYkPrndsjnmhuZsSbQDZoBdtbLhTdrpGoj4");
        console.log(apod);    
            
        apod.done(function(response){
            var data = response[0];
            $("#url").attr("src", data.url);
                
            $("#title").change(function(){
                var title = data.title;
                $("h1").text("Title: "+title+);
    
            
            });
            });
        });
});
