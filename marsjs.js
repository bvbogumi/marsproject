$(document).ready(function(){
    $("#show").click(function(){
        var latest = $.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=o5RPlXYkPrndsjnmhuZsSbQDZoBdtbLhTdrpGoj4");
        console.log(latest);    
            
        latest.done(function(response){
            $("#url").attr("src", response.latest_photos[0].img_src);
            $("#url1").attr("src", response.latest_photos[35].img_src);
            $("#url2").attr("src", response.latest_photos[49].img_src);
            $("#url3").attr("src", response.latest_photos[55].img_src);
            $("#camera").text(response.latest_photos[0].camera.full_name);
            $("#camera1").text(response.latest_photos[35].camera.full_name);
            $("#camera2").text(response.latest_photos[49].camera.full_name);
            $("#camera3").text(response.latest_photos[55].camera.full_name);
            $("#sol").text(response.latest_photos[0].sol); 
            $("#explanation").text(response.explanation);
            $("#copyright").text(response.copyright);
                       
            });
        });
});