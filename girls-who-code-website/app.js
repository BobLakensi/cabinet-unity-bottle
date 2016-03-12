$( document ).ready(function() {
    //make sure document is ready
    
    console.log("ready");
    
    $("#sbbH").on("mouseover", helper.buttonSideBarMOsbbH);
    $("#sbbH").on("mouseleave", helper.buttonSideBarMLsbbH);
    $("#sbbH").on("mousedown", helper.buttonSideBarMDsbbH);
    
    $("#sbbNA").on("mouseover", helper.buttonSideBarMOsbbNA);
    $("#sbbNA").on("mouseleave", helper.buttonSideBarMLsbbNA);
    $("#sbbNA").on("mousedown", helper.buttonSideBarMDsbbNA);
    
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
        //turn button sky blue when mouse over
        $("#sbbH").css("background-color", "skyblue");
    },
    // side bar button Mouse Leave side bar button home
    buttonSideBarMLsbbH: function () {
        //turn button transparent when mouse leaves
        $("#sbbH").css("background-color", "transparent");
    },
    // side bar button Mouse Down side bar button home
    buttonSideBarMDsbbH: function () {
        //turn button sky blue when clicked
        $("#sbbIH").css("background-color", "skyblue");
        //open home page
        location.href = "home.html";
    },
    
    
    // side bar button Mouse Over side bar button home
    buttonSideBarMOsbbNA: function () {
        $("#sbbNA").css("background-color", "skyblue");
    },
    // side bar button Mouse Leave side bar button home
    buttonSideBarMLsbbNA: function () {
        $("#sbbNA").css("background-color", "transparent");
    },
    // side bar button Mouse Down side bar button home
    buttonSideBarMDsbbNA: function () {
        $("#sbbNA").css("background-color", "skyblue");
        location.href = "home.html";
    },


    // side bar button Mouse Over side bar button Info South America
    buttonSideBarMOsbbISA: function () {
        //turn button sky blue when mouse over
        $("#sbbISA").css("background-color", "skyblue")
    },
    // side bar button Mouse Leave side bar button Info South America
    buttonSideBarMLsbbISA: function () {
        //turn button transparent when mouse leave
        $("#sbbISA").css("background-color", "transparent")
    },
    // side bar button Mouse Down side bar button Info South America
    buttonSideBarMDsbbISA: function () {
        //turn button sky blue when clicked
        $("#sbbISA").css("background-color", "skyblue");
        //opem south america info
        location.href = "info-SouthAmerica.html";
    },

    
    // side bar button Mouse Over side bar button Info Inka
    buttonSideBarMOsbbII: function () {
        //turn button sky blue when mouse over
        $("#sbbII").css("background-color", "skyblue")
    },
    // side bar button Mouse Leave side bar button Info Inka
    buttonSideBarMLsbbII: function () {
        //turn button transparent when mouse leaves
        $("#sbbII").css("background-color", "transparent")
    },
    // side bar button Mouse Down side bar button Info Inka
    buttonSideBarMDsbbII: function () {
        //turn button sky blue when clicked
        $("#sbbII").css("background-color", "skyblue");
        //open inka info
        location.href = "info-Inkas.html";
    },

    
    // side bar button Mouse Over side bar button Info North America
    buttonSideBarMOsbbINA: function () {
        //turn button sky blue when mouse over
        $("#sbbINA").css("background-color", "skyblue");
    },
    // side bar button Mouse Leave side bar button Info North America
    buttonSideBarMLsbbINA: function () {
        //turn button transparent when mouse leaves
        $("#sbbINA").css("background-color", "transparent");
    },
    //side bar button Mouse Down side bar button Info North America
    buttonSideBarMDsbbINA: function () {
        //turn button sky blue when clicked
        $("#sbbINA").css("background-color", "skyblue");
        //open north america info
        location.href = "info-NorthAmerica.html";
    }                                                           
}   //helper

