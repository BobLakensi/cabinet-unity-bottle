$( document ).ready(function() {
    //make sure document is ready
    
    console.log("ready");
    
    $("#sbbH").on("mouseover", helper.buttonSideBarMOsbbH);
    $("#sbbH").on("mouseleave", helper.buttonSideBarMLsbbH);
    $("#sbbH").on("mousedown", helper.buttonSideBarMDsbbH);
    
    $("#sbbNA").on("mouseover", buttonSideBarMOsbbNA);
    $("#sbbNA").on("mouseleave", buttonSideBarMLsbbNA);
    $("#sbbNA").on("mousedown", buttonSideBarMDsbbNA);
    
    $("#sbbISA").on("mouseover", helper.buttonSideBarMOsbbISA);
    $("#sbbISA").on("mouseleave", helper.buttonSideBarMLsbbISA);
    $("#sbbISA").on("mousedown", helper.buttonSideBarMDsbbISA);    

    $("#sbbII").on("mouseover", buttonSideBarMOsbbII);
    $("#sbbII").on("mouseleave", buttonSideBarMLsbbII);
    $("#sbbII").on("mousedown", buttonSideBarMDsbbII);
    
    $("#sbbINA").on("mouseover", buttonSideBarMOsbbINA);
    $("#sbbINA").on("mouseleave", buttonSideBarMLsbbINA);
    $("#sbbINA").on("mousedown", buttonSideBarMDsbbINA);
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
    buttonSideBarMOsbbISA: function (button) {
        $("#sbbISA").css("background-color", "skyblue")
    },
    // side bar button Mouse Leave side bar button Info South America
    buttonSideBarMLsbbISA: function (button) {
        $("#sbbISA").css("background-color", "transparent")
    },
    // side bar button Mouse Down side bar button Info South America
    buttonSideBarMDsbbISA: function (button) {
        $("#sbbISA").css("background-color", "skyblue");
        location.href = "info-SouthAmerica.html";
    }
//
//    // side bar button Mouse Over side bar button Info Inka
//    function buttonSideBarMOsbbII (button) {
//        $("#sbbII").css("background-color", "skyblue")
//    }
//    // side bar button Mouse Leave side bar buttonInfo Inka
//    function buttonSideBarMLsbbII (button) {
//        $("#sbbII").css("background-color", "transparent")
//    }
//    // side bar button Mouse Down side bar button Info Inka
//    function buttonSideBarMDsbbII (button) {
//        $("#sbbII").css("background-color", "skyblue");
//        location.href = "info-Inkas.html";
//    }
//
//
//    // side bar button Mouse Over side bar button Info North America
//    function buttonSideBarMOsbbINA (button) {
//        $("#sbbINA").css("background-color", "skyblue");
//    }
//    // side bar button Mouse Leave side bar button Info North America
//    function buttonSideBarMLsbbINA (button) {
//        $("#sbbINA").css("background-color", "transparent");
//    }
//    //side bar button Mouse Down side bar button Info North America
//    function buttonSideBarMDsbbINA (button) {
//        $("#sbbINA").css("background-color", "skyblue");
//        location.href = "info-NorthAmerica.html";
//    }                                                           
}

