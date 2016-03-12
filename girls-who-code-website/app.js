$( document ).ready(function() {
    //make sure document is ready
    
    console.log("ready");
    
    $("#sbbH").on("mouseover", helper.buttonSideBarMOsbbH);
    $("#sbbH").on("mouseleave", helper.buttonSideBarMLsbbH);
    $("#sbbH").on("mousedown", helper.buttonSideBarMDsbbH);
    
//    $("#sbbNA").on("mouseover", buttonSideBarMOsbbNA);
//    $("#sbbNA").on("mouseleave", buttonSideBarMLsbbNA);
//    $("#sbbNA").on("mousedown", buttonSideBarMDsbbNA);
    
    $("#sbbISA").on("mouseover", helper.buttonSideBarMOsbbISA);
    $("#sbbISA").on("mouseleave", helper.buttonSideBarMLsbbISA);
    $("#sbbISA").on("mousedown", helper.buttonSideBarMDsbbISA);    

    $("#sbbII").on("mouseover", helper.buttonSideBarMOsbbII);
    $("#sbbII").on("mouseleave", helper.buttonSideBarMLsbbII);
    $("#sbbII").on("mousedown", helper.buttonSideBarMDsbbII);
    
    $("#sbbINA").on("mouseover", helper.buttonSideBarMOsbbINA);
    $("#sbbINA").on("mouseleave", helper.buttonSideBarMLsbbINA);
    $("#sbbINA").on("mousedown", helper.buttonSideBarMDsbbINA);
});

var helper = {
    // side bar button Mouse Over side bar button home
    buttonSideBarMOsbbH: function () {
        $("#sbbH").css("background-color", "skyblue");
    },
    // side bar button Mouse Leave side bar button home
    buttonSideBarMLsbbH: function () {
        $("#sbbH").css("background-color", "transparent");
    },
    // side bar button Mouse Down side bar button home
    buttonSideBarMDsbbH: function () {
        $("#sbbIH").css("background-color", "skyblue");
        location.href = "home.html";
    },


    // side bar button Mouse Over side bar button Info South America
    buttonSideBarMOsbbISA: function () {
        $("#sbbISA").css("background-color", "skyblue")
    },
    // side bar button Mouse Leave side bar button Info South America
    buttonSideBarMLsbbISA: function () {
        $("#sbbISA").css("background-color", "transparent")
    },
    // side bar button Mouse Down side bar button Info South America
    buttonSideBarMDsbbISA: function () {
        $("#sbbISA").css("background-color", "skyblue");
        location.href = "info-SouthAmerica.html";
    },

    // side bar button Mouse Over side bar button Info Inka
    buttonSideBarMOsbbII: function () {
        $("#sbbII").css("background-color", "skyblue")
    },
    // side bar button Mouse Leave side bar button Info Inka
    buttonSideBarMLsbbII: function () {
        $("#sbbII").css("background-color", "transparent")
    },
    // side bar button Mouse Down side bar button Info Inka
    buttonSideBarMDsbbII: function () {
        $("#sbbII").css("background-color", "skyblue");
        location.href = "info-Inkas.html";
    },

    // side bar button Mouse Over side bar button Info North America
    buttonSideBarMOsbbINA: function () {
        $("#sbbINA").css("background-color", "skyblue");
    },
    // side bar button Mouse Leave side bar button Info North America
    buttonSideBarMLsbbINA: function () {
        $("#sbbINA").css("background-color", "transparent");
    },
    //side bar button Mouse Down side bar button Info North America
    buttonSideBarMDsbbINA: function () {
        $("#sbbINA").css("background-color", "skyblue");
        location.href = "info-NorthAmerica.html";
    }                                                           
}   //helper

