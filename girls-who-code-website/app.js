$( document ).ready(function() {
    //make sure document is ready
    console.log("ready");
    
    $(".buttonSideBar").on("mouseover", buttonSideBarMO);
    
    $(".buttonSideBar").on("mouseleave", buttonSideBarML);
    
});



function sideBarButtonSA (button){
    location.href = "info-SouthAmerica.html";
}

function sideBarButtonI (button){
    location.href = "info-Inkas.html";
}

function sideBarButtonNA (button){
    location.href = "info-NorthAmerica.html";
}

function sideBarButtonHome (button) {
    location.href = "home.html";
}

function buttonSideBarMO (button) {
    $(".buttonSideBar").css("background-color", "black")
}

function buttonSideBarML (button) {
    $(".buttonSideBar").css("background-color", "transparent")
}

