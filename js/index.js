$(document).ready(function() {
    
    //debugger
    if(JSON.parse(sessionStorage.getItem("quoteFood"))){
        //Retrive and set the 'like' for the food quote
        $("#quote-food").find(".like").addClass('like-yes');
        $("#quote-food").find(".like").removeClass('like-no');

    } 

    if(JSON.parse(sessionStorage.getItem("quoteProg"))){
        //Retrive and set the 'like' for the programme quote
        $("#quote-prog").find(".like").addClass('like-yes');
        $("#quote-prog").find(".like").removeClass('like-no');

    }     

    //Save on closing of the webpage
    $(window).on("unload",function(){
        sessionStorage.setItem("quoteFood", $("#quote-food").find(".like").hasClass('like-yes'));
        sessionStorage.setItem("quoteProg", $("#quote-prog").find(".like").hasClass('like-yes'));
    })

});



