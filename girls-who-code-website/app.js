// function SBB(id){
//     this.el = document.getElementById(id);
//     this.defBgColor= "skyGreen"

//     this.setBg= function(color){
//         this.el.style.backgroundColor= color;
//     }
//     this.setBg1= function(){
//         this.setBg( this.defBgColor );
//     }
// }
// function SBBC(id){
//     this.constructor= SBB;
//     this.constructor(id);
    
//     this.url= "home.html";
//     this.prepEl= function(){
//         this.el.onclick= this.buttonOnClick;
//         this.el.helper= this;
//     }
//     this.buttonOnClick= function(){
//         document.location= this.helper.url;
//     }
// }
// function SBBCdot(id){
//     this.constructor= SBB;
//     this.constructor(id);
    
//     this.url= "../home.html";
    
// }

// x= new SBBC();
// x.buttonOnClick()


$( document ).ready(function() {
    //make sure document is ready
    console.log("ready");
    
            // new SBB( "#sbbHI" ).el.onmouseover = x.setBg1;    
    //$("#sbbHI").on("mouseover", helper.buttonSideBarMOsbbHI);
    
    // $("#sbbHI").on("mouseleave", helper.buttonSideBarMLsbbHI);
    // new SBBC( "#sbbHI" ).prepEl();
    //$("#sbbHI").on("mousedown", helper.buttonSideBarMDsbbHI); 
    
    //side bar button Home outside its folder
    $("#sbbHI").on("mouseover", helper.buttonSideBarMOsbbHI);
    $("#sbbHI").on("mouseleave", helper.buttonSideBarMLsbbHI);
    $("#sbbHI").on("mousedown", helper.buttonSideBarMDsbbHI);
    
        
    //side bar button Home inside its folder
    $("#sbbHO").on("mouseover", helper.buttonSideBarMOsbbHO);
    $("#sbbHO").on("mouseleave", helper.buttonSideBarMLsbbHO);
    $("#sbbHO").on("mousedown", helper.buttonSideBarMDsbbHO);
    
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
    
    //side bar button Europe 1700 - 1800 Outside of its folder
    $("#sbbE17-18O").on("mouseover", helper.europe17to18.buttonSideBarMOsbbE17to18O);
    $("#sbbE17-18O").on("mouseleave", helper.europe17to18.buttonSideBarMLsbbE17to18O);
    $("#sbbE17-18O").on("mousedown", helper.europe17to18.buttonSideBarMDsbbE17to18O);
    
    //side bar button Europe 1700 - 1800 Inside of its folder
    $("#sbbE17-18I").on("mouseover", helper.europe17to18.buttonSideBarMOsbbE17to18I);
    $("#sbbE17-18I").on("mouseleave", helper.europe17to18.buttonSideBarMLsbbE17to18I);
    $("#sbbE17-18I").on("mousedown", helper.europe17to18.buttonSideBarMDsbbE17to18I);
    
    //side bar button Info Rococo
    $("#sbbIR").on("mouseover", helper.europe17to18.buttonSideBarMOsbbIR);
    $("#sbbIR").on("mouseleave", helper.europe17to18.buttonSideBarMLsbbIR);
    $("#sbbIR").on("mousedown", helper.europe17to18.buttonSideBarMDsbbIR);
    
    //side bar button Info Enlightenment
    $("#sbbIE").on("mouseover", helper.europe17to18.buttonSideBarMOsbbIE);
    $("#sbbIE").on("mouseleave", helper.europe17to18.buttonSideBarMLsbbIE);
    $("#sbbIE").on("mousedown", helper.europe17to18.buttonSideBarMDsbbIE);
    
    //side bar button Info Enlightenment
    $("#sbbIN").on("mouseover", helper.europe17to18.buttonSideBarMOsbbIN);
    $("#sbbIN").on("mouseleave", helper.europe17to18.buttonSideBarMLsbbIN);
    $("#sbbIN").on("mousedown", helper.europe17to18.buttonSideBarMDsbbIN);
});

var helper = {    
    // side bar button Mouse Over side bar button home
    buttonSideBarMOsbbHI: function () {
        //turn button sky blue when mouse over
        $("#sbbHI").css("background-color", "skyblue");
    },
    // side bar button Mouse Leave side bar button home
    buttonSideBarMLsbbHI: function () {
        //turn button transparent when mouse leaves
        $("#sbbHI").css("background-color", "transparent");
    },
    // side bar button Mouse Down side bar button home
    buttonSideBarMDsbbHI: function () {
        //turn button sky blue when clicked
        $("#sbbHI").css("background-color", "skyblue");
        //open home page
        location.href = "home.html";
    },
    
    // side bar button Mouse Over side bar button home
    buttonSideBarMOsbbHO: function () {
        //turn button sky blue when mouse over
        $("#sbbHO").css("background-color", "skyblue");
    },
    // side bar button Mouse Leave side bar button home
    buttonSideBarMLsbbHO: function () {
        //turn button transparent when mouse leaves
        $("#sbbHO").css("background-color", "transparent");
    },
    // side bar button Mouse Down side bar button home
    buttonSideBarMDsbbHO: function () {
        //turn button sky blue when clicked
        $("#sbbHO").css("background-color", "skyblue");
        //open home page
        location.href = "../home.html";
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
    },   //native americas
    
    europe17to18: {
        // side bar button Mouse Over side bar button Europe 17 to `18
        buttonSideBarMOsbbE17to18O: function () {
            //turn button sky blue when mouse over
            $("#sbbE17-18O").css("background-color", "skyblue");
        }, 
        // side bar button Mouse Over side bar button Europe 17 to `18
        buttonSideBarMLsbbE17to18O: function () {
            //turn button transparent when mouse leaves
            $("#sbbE17-18O").css("background-color", "transparent");
        },
        // side bar button Mouse Over side bar button Europe 17 to `18
        buttonSideBarMDsbbE17to18O: function () {
            //turn button sky blue when clicked
            $("#sbbE17-18O").css("background-color", "skyblue");
            //open europe-1700-1800 page
            location.href = "europe-1700-1800/europe-1700-1800.html";
        },
        
        // side bar button Mouse Over side bar button Europe 17 to `18
        buttonSideBarMOsbbE17to18I: function () {
            //turn button sky blue when mouse over
            $("#sbbE17-18I").css("background-color", "skyblue");
        }, 
        // side bar button Mouse Over side bar button Europe 17 to `18
        buttonSideBarMLsbbE17to18I: function () {
            //turn button transparent when mouse leaves
            $("#sbbE17-18I").css("background-color", "transparent");
        },
        // side bar button Mouse Over side bar button Europe 17 to `18
        buttonSideBarMDsbbE17to18I: function () {
            //turn button sky blue when clicked
            $("#sbbE17-18I").css("background-color", "skyblue");
            //open europe-1700-1800 page
            location.href = "europe-1700-1800.html";
        },
        
        
        // side bar button Mouse Over side bar button Info Rococo
        buttonSideBarMOsbbIR: function () {
            //turn button sky blue when mouse over
            $("#sbbIR").css("background-color", "skyblue");
        }, 
        // side bar button Mouse Over side bar button Info Rococo
        buttonSideBarMLsbbIR: function () {
            //turn button transparent when mouse leaves
            $("#sbbIR").css("background-color", "transparent");
        },
        // side bar button Mouse Over side bar button Info Rococo
        buttonSideBarMDsbbIR: function () {
            //turn button sky blue when clicked
            $("#sbbIR").css("background-color", "skyblue");
            //open Rococo page
            location.href = "info-Rococo.html";
        },
        
        
        // side bar button Mouse Over side bar button Info Enlightenment
        buttonSideBarMOsbbIE: function () {
            //turn button sky blue when mouse over
            $("#sbbIE").css("background-color", "skyblue");
        }, 
        // side bar button Mouse Over side bar button Info Enlightenment
        buttonSideBarMLsbbIE: function () {
            //turn button transparent when mouse leaves
            $("#sbbIE").css("background-color", "transparent");
        },
        // side bar button Mouse Over side bar button Info Enlightenment
        buttonSideBarMDsbbIE: function () {
            //turn button sky blue when clicked
            $("#sbbIE").css("background-color", "skyblue");
            //open Enlightenment page
            location.href = "info-Enlightenment.html";
        },
        
        
        // side bar button Mouse Over side bar button Info Neoclassicism
        buttonSideBarMOsbbIN: function () {
            //turn button sky blue when mouse over
            $("#sbbIN").css("background-color", "skyblue");
        }, 
        // side bar button Mouse Over side bar button Info Neoclassicism
        buttonSideBarMLsbbIN: function () {
            //turn button transparent when mouse leaves
            $("#sbbIN").css("background-color", "transparent");
        },
        // side bar button Mouse Over side bar button Info Neoclassicism
        buttonSideBarMDsbbIN: function () {
            //turn button sky blue when clicked
            $("#sbbIN").css("background-color", "skyblue");
            //open Neoclassicism page
            location.href = "info-Neoclassicism.html";
        }
        
     }   //Europe 17 to 18
}   //helper

