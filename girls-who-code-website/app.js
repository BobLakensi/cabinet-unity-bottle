$( document ).ready(function() {
    //make sure document is ready
    console.log("ready");
    
    $("#sbbH").on("mouseover", buttonSideBarMOsbbH);
    $("#sbbH").on("mouseleave", buttonSideBarMLsbbH);
    $("#sbbH").on("mousedown", buttonSideBarMDsbbH);
    
    $("#sbbSA").on("mouseover", buttonSideBarMOsbbSA);
    $("#sbbSA").on("mouseleave", buttonSideBarMLsbbSA);
    $("#sbbSA").on("mousedown", buttonSideBarMDsbbSA);    

    $("#sbbI").on("mouseover", buttonSideBarMOsbbI);
    $("#sbbI").on("mouseleave", buttonSideBarMLsbbI);
    $("#sbbI").on("mousedown", buttonSideBarMDsbbI);
    
    $("#sbbNA").on("mouseover", buttonSideBarMOsbbNA);
    $("#sbbNA").on("mouseleave", buttonSideBarMLsbbNA);
    $("#sbbNA").on("mousedown", buttonSideBarMDsbbNA);
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
    $("#sbbH").css("background-color", "skyblue");
}
// side bar button Mouse Leave side bar button home
function buttonSideBarMLsbbH (button) {
    $("#sbbH").css("background-color", "transparent");
}
// side bar button Mouse Down side bar button home
function buttonSideBarMDsbbH (button) {
    $("#sbbH").css("background-color", "skyblue");
}


// side bar button Mouse Over side bar button North America
function buttonSideBarMOsbbNA (button) {
    $("#sbbNA").css("background-color", "skyblue");
}
// side bar button Mouse Leave side bar button North America
function buttonSideBarMLsbbNA (button) {
    $("#sbbNA").css("background-color", "transparent");
}
//side bar button Mouse Down side bar button North America
function buttonSideBarMDsbbNA (button) {
    $("#sbbNA").css("background-color", "skyblue");
}


// side bar button Mouse Over side bar button South America
function buttonSideBarMOsbbSA (button) {
    $("#sbbSA").css("background-color", "skyblue")
}
// side bar button Mouse Leave side bar button South America
function buttonSideBarMLsbbSA (button) {
    $("#sbbSA").css("background-color", "transparent")
}
// side bar button Mouse Down side bar button South America
function buttonSideBarMDsbbSA (button) {
    $("#sbbSA").css("background-color", "skyblue")
}

// side bar button Mouse Over side bar button Inka
function buttonSideBarMOsbbI (button) {
    $("#sbbI").css("background-color", "skyblue")
}
// side bar button Mouse Leave side bar button Inka
function buttonSideBarMLsbbI (button) {
    $("#sbbI").css("background-color", "transparent")
}
// side bar button Mouse Down side bar button Inka
function buttonSideBarMDsbbI (button) {
    $("#sbbI").css("background-color", "skyblue")
}

