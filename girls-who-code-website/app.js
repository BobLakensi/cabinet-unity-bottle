$( document ).ready(function() {
    //make sure document is ready
    console.log("ready");
    
    $("#sbbH").on("mouseover", buttonSideBarMOsbbH);
    $("#sbbH").on("mouseleave", buttonSideBarMLsbbH);
    $("#sbbH").on("mousedown", buttonSideBarMDsbbH)
    
    
    $("#sbbNA").on("mouseover", buttonSideBarMOsbbNA);
    $("#sbbSA").on("mouseover", buttonSideBarMOsbbSA);
    $("#sbbI").on("mouseover", buttonSideBarMOsbbI);    
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

// side bar button Mouse Over side bar button home
function buttonSideBarMOsbbH (button) {
    $("#sbbH").css("background-color", "black");
}
// side bar button Mouse Leave side bar button home
function buttonSideBarMLsbbH (button) {
    $("#sbbH").css("background-color", "transparent");
}
// side bar button Mouse Down side bar button home
function buttonSideBarMDsbbH (button) {
    $("#sbbH").css("background-color", "blue");
}

//// side bar button Mouse Over side bar button North America
//function buttonSideBarMOsbbNA (button) {
//    $(".buttonSideBar").css("background-color", "black")
//}
//// side bar button Mouse Leave side bar button North America
//function buttonSideBarMLsbbNA (button) {
//    $(".buttonSideBar").css("background-color", "transparent")
//}
//
//// side bar button Mouse Over side bar button South America
//function buttonSideBarMOsbbSA (button) {
//    $(".buttonSideBar").css("background-color", "black")
//}
//// side bar button Mouse Leave side bar button South America
//function buttonSideBarMLsbbSA (button) {
//    $(".buttonSideBar").css("background-color", "transparent")
//}
//
//// side bar button Mouse Over side bar button Inkas
//function buttonSideBarMLsbbI (button) {
//    $(".buttonSideBar").css("background-color", "transparent")
//}
//// side bar button Mouse Leave side bar button Inkas
//function buttonSideBarMOsbbI (button) {
//    $(".buttonSideBar").css("background-color", "transparent")
//}

