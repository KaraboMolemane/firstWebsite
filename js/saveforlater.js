$(document).ready(function() {

    //retrive data from storage
    let savedItems = JSON.parse(sessionStorage.getItem("saveForLater"));
    //debugger

     //add items to html file
    Array.from(savedItems).forEach(function(item){
        $(".slides").append(item);
    })

    $(".accord").accordion({event: "click"})

    //A function which contains hiding/showing
    hidePlaceHolder();

    showHideComments();

    //slideSavedItems();
    animateContent();

    //Bring back user comments 
    if($("#inputCommentI1").length && sessionStorage.getItem("inputCommentI1")){
      $("#inputCommentI1").val(sessionStorage.getItem("inputCommentI1"));
    } 
    if($("#inputCommentI2").length && sessionStorage.getItem("inputCommentI2")){
      $("#inputCommentI2").val(sessionStorage.getItem("inputCommentI2"));
    }   
    if($("#inputCommentR1").length && sessionStorage.getItem("inputCommentR1")){
      $("#inputCommentR1").val(sessionStorage.getItem("inputCommentR1"));
    }  
    if($("#inputCommentR2").length && sessionStorage.getItem("inputCommentR2")){
      $("#inputCommentR2").val(sessionStorage.getItem("inputCommentR2"));
    }  
    if($("#inputCommentR3").length && sessionStorage.getItem("inputCommentR3")){
      $("#inputCommentR3").val(sessionStorage.getItem("inputCommentR3"));
    }  

    //Save user comments
    $(window).on("unload",function(){
      sessionStorage.setItem("inputCommentI1", $("#inputCommentI1")[0].value);
      sessionStorage.setItem("inputCommentI2", $("#inputCommentI2")[0].value);
      sessionStorage.setItem("inputCommentR1", $("#inputCommentR1")[0].value);
      sessionStorage.setItem("inputCommentR2", $("#inputCommentR2")[0].value);
      sessionStorage.setItem("inputCommentR3", $("#inputCommentR3")[0].value);
  })

});

function hidePlaceHolder(){
    if($("main").children().length > 2){
        $("#noItemsPlaceHolder").hide();
    }
}

function showHideComments(){
  //A function which contains hiding/showing
  //debugger
  $(".btn-show-hide").click(function(event){
    $(this).next().toggle("slow");
  })
}

function slideSavedItems(){
  let x = 0;

  setInterval(function(){
    $('#slider .slides').animate({'margin-left': '-=720'},1000);    
  }, 3000)

}

function animateContent(){
  $('#slider .slides').animate({'margin-left': '-20', border: 'solid', 'border-width': thick},1000);
}