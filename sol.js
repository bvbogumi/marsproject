$(document).ready(function(){
        var latest1000 = $.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=o5RPlXYkPrndsjnmhuZsSbQDZoBdtbLhTdrpGoj4&sol=1000");
        console.log(latest1000);    
            
        latest1000.done(function(response){
            $("#url").attr("src", response.photos[0].img_src);
            $("#url1").attr("src", response.photos[3].img_src);
            $("#url2").attr("src", response.photos[70].img_src);
            $("#url3").attr("src", response.photos[848].img_src);
            $("#camera").text(response.photos[0].camera.full_name);
            $("#camera1").text(response.photos[3].camera.full_name);
            $("#camera2").text(response.photos[70].camera.full_name);
            $("#camera3").text(response.photos[848].camera.full_name);
                                  
            });
        });

$(document).ready(function(){
           var latest2000 = $.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=o5RPlXYkPrndsjnmhuZsSbQDZoBdtbLhTdrpGoj4&sol=2000");
        console.log(latest2000);    
            
        latest2000.done(function(response){
            $("#url02").attr("src", response.photos[0].img_src);
            $("#url12").attr("src", response.photos[7].img_src);
            $("#url22").attr("src", response.photos[50].img_src);
            $("#url32").attr("src", response.photos[69].img_src);
            $("#camera02").text(response.photos[0].camera.full_name);
            $("#camera12").text(response.photos[7].camera.full_name);
            $("#camera22").text(response.photos[50].camera.full_name);
            $("#camera32").text(response.photos[69].camera.full_name);
                                  
            });
        });

        $(document).ready(function(){
            var latest2000 = $.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=o5RPlXYkPrndsjnmhuZsSbQDZoBdtbLhTdrpGoj4&sol=3000");
         console.log(latest2000);    
             
         latest2000.done(function(response){
             $("#url30").attr("src", response.photos[0].img_src);
             $("#url31").attr("src", response.photos[3].img_src);
             $("#url322").attr("src", response.photos[15].img_src);
             $("#url33").attr("src", response.photos[55].img_src);
             $("#camera30").text(response.photos[0].camera.full_name);
             $("#camera31").text(response.photos[3].camera.full_name);
             $("#camera322").text(response.photos[15].camera.full_name);
             $("#camera33").text(response.photos[55].camera.full_name);
                                   
             });
         });
 
