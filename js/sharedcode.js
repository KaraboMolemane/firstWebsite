//Below are some of the resources I consulted to learn how to add a 'save for later' (like and dislike) feature
//https://youtu.be/X8h7PgkM4QQ
//https://javascript.plainenglish.io/how-to-create-a-comment-section-using-html-and-vanilla-js-aa6b6a53b9cf
//https://www.freecodecamp.org/news/how-to-build-a-live-comment-feature-using-javascript-and-pusher-747d51e21430/
//https://pusher.com/tutorials/live-comments-javascript/



    //initiate an empty array for saved items
    let saveForLater = [];

$(document).ready(function() {


    //Save user input 
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("saveForLater", JSON.stringify(saveForLater));
        sessionStorage.setItem("hasCodeRunBefore", true);
    } else {
        saveForLater = JSON.parse(sessionStorage.getItem("saveForLater"));

    }

    //let activePage = getHTMLname();

    //A drop-down menu
    $(".accord").accordion({event: "click"})

    listenForLikes();    

});




function listenForLikes(){
    const like = $(".like").click(function(event){
        //debugger
        event.target.classList.toggle("like-no");
        event.target.classList.toggle("like-yes");
        addItemToSavedItemsPage(event);
    });
}


function addItemToSavedItemsPage(event){
    //I consulted with a YouTube chanel "All Things JavaScript, LLC" on how to copy data between HTML pages
    //https://youtu.be/GNZg1KRsWuU
    let parent = event.target.parentElement.parentElement.parentElement.outerHTML;
    debugger
    //Decide if we are adding or removing the element
    //https://www.w3schools.com/jquery/html_hasclass.asp 
    if(event.target.classList.contains("like-yes")){
        //Remove like/heart icon
        parent = parent.replace("like-yes","");
        //show comment
        parent = parent.replaceAll("display: none","display: block")
        //add item to array
        saveForLater.push(parent);
    }
    else if(event.target.classList.contains("like-no")){
        //Remove class for search to work
        parent = parent.replace("like-no","");
        //Fix css property for search to work
        parent = parent.replaceAll("display: none","display: block");

        
        //remove item from array
        //https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value
        let index = saveForLater.indexOf(parent);
        if (index !== -1) {
            saveForLater.splice(index, 1);
        }
    }

    let saveForLaterLen = saveForLater.length

    if(saveForLaterLen > 0){
        //Save new value to session storage
        sessionStorage.setItem("saveForLater", JSON.stringify(saveForLater))
    }
    else{
        sessionStorage.setItem("saveForLater", null)
    }

    //When an item is added, an alert should tell the user how many items are in their "Save for later" folder.
    alert(`There is ${saveForLaterLen} item(s) in the "Save for later"`)
}

function getHTMLname(){
    //https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
    //https://www.w3schools.com/jsref/prop_win_location.asp 
    let path = window.location.pathname;
    let page = path.split("/").pop();
    return page;
}