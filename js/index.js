$(document).ready(function() {

    
    //debugger
    if(JSON.parse(sessionStorage.getItem("quoteFood"))){
        $("#quote-food").find(".like").addClass('like-yes');
        $("#quote-food").find(".like").removeClass('like-no');

    }  
    if(JSON.parse(sessionStorage.getItem("quoteProg"))){
        $("#quote-prog").find(".like").addClass('like-yes');
        $("#quote-prog").find(".like").removeClass('like-no');

    }  
   

    $(window).on("unload",function(){
        sessionStorage.setItem("quoteFood", $("#quote-food").find(".like").hasClass('like-yes'));
        sessionStorage.setItem("quoteProg", $("#quote-prog").find(".like").hasClass('like-yes'));
    })

});



