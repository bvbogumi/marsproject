$(document).ready(function(){
    $("#show1000").click(function(){
        var latest1000 = $.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=o5RPlXYkPrndsjnmhuZsSbQDZoBdtbLhTdrpGoj4&sol=1000");
        console.log(latest1000);    
            
        latest1000.done(function(response){
            $("#url").attr("src", response.photos[0].img_src);
            $("#url1").attr("src", response.photos[15].img_src);
            $("#url2").attr("src", response.photos[30].img_src);
            $("#url3").attr("src", response.photos[55].img_src);
            $("#camera").text(response.photos[0].camera.full_name);
            $("#camera1").text(response.photos[15].camera.full_name);
            $("#camera2").text(response.photos[30].camera.full_name);
            $("#camera3").text(response.photos[55].camera.full_name);
                                  
            });
        });
});

$(document).ready(function(){
    $("#show2000").click(function(){
        var latest2000 = $.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=o5RPlXYkPrndsjnmhuZsSbQDZoBdtbLhTdrpGoj4&sol=2000");
        console.log(latest2000);    
            
        latest2000.done(function(response){
            $("#url02").attr("src", response.photos[0].img_src);
            $("#url12").attr("src", response.photos[15].img_src);
            $("#url22").attr("src", response.photos[29].img_src);
            $("#url32").attr("src", response.photos[55].img_src);
            $("#camera02").text(response.photos[0].camera.full_name);
            $("#camera12").text(response.photos[15].camera.full_name);
            $("#camera22").text(response.photos[29].camera.full_name);
            $("#camera32").text(response.photos[55].camera.full_name);
                                  
            });
        });
});