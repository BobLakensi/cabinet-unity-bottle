$( document ).ready(function() {
    //make sure document is ready
    
    console.log("ready");
    
    //side bar button Home
    $("#sbbH").on("mouseover", helper.buttonSideBarMOsbbH);
    $("#sbbH").on("mouseleave", helper.buttonSideBarMLsbbH);
    $("#sbbH").on("mousedown", helper.buttonSideBarMDsbbH);
    
    //side bar button North America
    $("#sbbNA").on("mouseover", helper.nativeAmericas.buttonSideBarMOsbbNA);
    $("#sbbNA").on("mouseleave", helper.nativeAmericas.buttonSideBarMLsbbNA);
    $("#sbbNA").on("mousedown", helper.nativeAmericas.buttonSideBarMDsbbNA);
    
    //side bar button Info South America
    $("#sbbISA").on("mouseover", helper.nativeAmericas.buttonSideBarMOsbbISA);
    $("#sbbISA").on("mouseleave", helper.nativeAmericas.buttonSideBarMLsbbISA);
    $("#sbbISA").on("mousedown", helper.nativeAmericas.buttonSideBarMDsbbISA);    

    //side bar button Info Inkas
    $("#sbbII").on("mouseover", helper.nativeAmericas.buttonSideBarMOsbbII);
    $("#sbbII").on("mouseleave", helper.nativeAmericas.buttonSideBarMLsbbII);
    $("#sbbII").on("mousedown", helper.nativeAmericas.buttonSideBarMDsbbII);
    
    //side bar button Info North America
    $("#sbbINA").on("mouseover", helper.nativeAmericas.buttonSideBarMOsbbINA);
    $("#sbbINA").on("mouseleave", helper.nativeAmericas.buttonSideBarMLsbbINA);
    $("#sbbINA").on("mousedown", helper.nativeAmericas.buttonSideBarMDsbbINA);
    
    //side bar button Europe 1700 - 1800
    $("#sbbE17-18").on("mouseover", helper.buttonSideBarMOsbbE17to18);
    $("#sbbE17-18").on("mouseleave", helper.buttonSideBarMLsbbE17to18);
    $("#sbbE17-18").on("mousedown", helper.buttonSideBarMDsbbE17to18);
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
    
    nativeAmericas: {
        // side bar button Mouse Over side bar button North America
        buttonSideBarMOsbbNA: function () {
            $("#sbbNA").css("background-color", "skyblue");
        },
        // side bar button Mouse Leave side bar button North America
        buttonSideBarMLsbbNA: function () {
            $("#sbbNA").css("background-color", "transparent");
        },
        // side bar button Mouse Down side bar button home
        buttonSideBarMDsbbNA: function () {
            $("#sbbNA").css("background-color", "skyblue");
            location.href = "native-americas.html";
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
    }   //native americas
}   //helper

