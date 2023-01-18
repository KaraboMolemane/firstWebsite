$(document).ready(function() {
    
    //debugger
    if(JSON.parse(sessionStorage.getItem("LikeRecp1"))){
        //Retrive and set the 'like' for the recipe 1
        $("#Recp1").find(".like").addClass('like-yes');
        $("#Recp1").find(".like").removeClass('like-no');

    }  
    if(JSON.parse(sessionStorage.getItem("LikeRecp2"))){
        //Retrive and set the 'like' for the recipe 2
        $("#Recp2").find(".like").addClass('like-yes');
        $("#Recp2").find(".like").removeClass('like-no');

    }  
    if(JSON.parse(sessionStorage.getItem("LikeRecp3"))){
        //Retrive and set the 'like' for the recipe 3
        $("#Recp3").find(".like").addClass('like-yes'); 
        $("#Recp3").find(".like").removeClass('like-no');

    }    

    $(window).on("unload",function(){
        //Save recipe "likes' on closing of the page
        sessionStorage.setItem("LikeRecp1", $("#Recp1").find(".like").hasClass('like-yes'));
        sessionStorage.setItem("LikeRecp2", $("#Recp2").find(".like").hasClass('like-yes'));
        sessionStorage.setItem("LikeRecp3", $("#Recp3").find(".like").hasClass('like-yes'));
    })

});


function retainLikesAfterReload(){
    //user's selections must be retained after the page refreshes 
    //https://stackoverflow.com/questions/35922306/how-to-keep-class-of-a-div-after-page-reload
    
    let saveForLater = JSON.parse(sessionStorage.getItem("saveForLater"));

    if(saveForLater){
        let sections = $(".like");

        for (let index = 0; index < sections.length; index++) {
            const element = sections[index];
            const list = element.parentElement.nextElementSibling.innerHTML;

            for (let j = 0; j < saveForLater.length; j++) {
                const saveForLaterItem = saveForLater[j];
                if(saveForLaterItem.indexOf(list) != -1){
                    element.classList.replace("like-no", "like-yes");
                }
             
            }              
        }
    }

}

