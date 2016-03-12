$( document ).ready(function() {
    //make sure document is ready
    console.log("ready");
    
    $("#sbbH").on("mouseover", buttonSideBarMOsbbH);
    $("#sbbH").on("mouseleave", buttonSideBarMLsbbH);
    $("#sbbH").on("mousedown", buttonSideBarMDsbbH);
    
    $("#sbbISA").on("mouseover", buttonSideBarMOsbbSA);
    $("#sbbISA").on("mouseleave", buttonSideBarMLsbbSA);
    $("#sbbISA").on("mousedown", buttonSideBarMDsbbSA);    

    $("#sbbII").on("mouseover", buttonSideBarMOsbbI);
    $("#sbbII").on("mouseleave", buttonSideBarMLsbbI);
    $("#sbbII").on("mousedown", buttonSideBarMDsbbI);
    
    $("#sbbINA").on("mouseover", buttonSideBarMOsbbNA);
    $("#sbbINA").on("mouseleave", buttonSideBarMLsbbNA);
    $("#sbbINA").on("mousedown", buttonSideBarMDsbbNA);
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
    $("#sbbIH").css("background-color", "skyblue");
}


// side bar button Mouse Over side bar button Info North America
function buttonSideBarMOsbbNA (button) {
    $("#sbbINA").css("background-color", "skyblue");
}
// side bar button Mouse Leave side bar button Info North America
function buttonSideBarMLsbbNA (button) {
    $("#sbbINA").css("background-color", "transparent");
}
//side bar button Mouse Down side bar button Info North America
function buttonSideBarMDsbbNA (button) {
    $("#sbbINA").css("background-color", "skyblue");
}


// side bar button Mouse Over side bar button Info South America
function buttonSideBarMOsbbSA (button) {
    $("#sbbISA").css("background-color", "skyblue")
}
// side bar button Mouse Leave side bar button Info South America
function buttonSideBarMLsbbSA (button) {
    $("#sbbISA").css("background-color", "transparent")
}
// side bar button Mouse Down side bar button Info South America
function buttonSideBarMDsbbSA (button) {
    $("#sbbISA").css("background-color", "skyblue")
}

// side bar button Mouse Over side bar button Info Inka
function buttonSideBarMOsbbI (button) {
    $("#sbbII").css("background-color", "skyblue")
}
// side bar button Mouse Leave side bar buttonInfo Inka
function buttonSideBarMLsbbI (button) {
    $("#sbbII").css("background-color", "transparent")
}
// side bar button Mouse Down side bar button Info Inka
function buttonSideBarMDsbbI (button) {
    $("#sbbII").css("background-color", "skyblue")
}

