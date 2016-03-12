$( document ).ready(function() {
    //make sure document is ready
    console.log("ready");
    
    $(".buttonSideBar").on("mouseover", buttonSideBarMO);
    
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
        console.log("gsadgdsaf");
}

