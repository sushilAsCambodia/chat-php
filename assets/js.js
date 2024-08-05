var sideTwo = document.querySelector(".side-two");

function newChat() {
    sideTwo.style.left = "0";
}

function backToChat() {
    sideTwo.style.left = "-100%";
}

function vewChat(val){
    if(val == 'add'){
        document.getElementById("chatUsers").classList.add("mobileViewNone");
    }else{
        document.getElementById("chatUsers").classList.remove("mobileViewNone");
    } 
}