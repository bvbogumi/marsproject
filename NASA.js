$(document).ready(function(){
    $("#show").click(function(){
        var apod = $.get("https://api.nasa.gov/planetary/apod?api_key=o5RPlXYkPrndsjnmhuZsSbQDZoBdtbLhTdrpGoj4");
        console.log(apod);    
            
        apod.done(function(response){
            $("#url").attr("src", response.url);
            $("#title").text(response.title);
            $("#explanation").text(response.explanation);
            $("#copyright").text(response.copyright);
                       
            });
        });
});

