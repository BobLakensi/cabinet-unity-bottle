/* 
function SBB(id){    //side bar button
     this.el = document.getElementById(id);
     this.defBgColor= "skyGreen"

     this.setBg= function(color){
         this.el.style.backgroundColor= color;
     }
     this.setBg1= function(){
         this.setBg( this.defBgColor );
     }
 }
 function SBBC(id){   //side bar button color
     this.constructor= SBB;
     this.constructor(id);
    
     this.url= "home.html";
     this.prepEl= function(){
         this.el.onclick= this.buttonOnClick;
         this.el.helper= this;
     }
     this.buttonOnClick= function(){
         document.location= this.helper.url;
     }
 }
 function SBBCdot(id){
     this.constructor= SBB;
     this.constructor(id);
    
     this.url= "../home.html";
    
 }

 x= new SBBC();
 x.buttonOnClick()
 
 */

//color side buttons and top bar buttons on hover
$( document ).ready(function() {   
    console.log("ready")
    //side bar button changes color on hover
    var sbe = $(".buttonSideBar, #topBarToggle, .showContent, #topBarToggleMenu" ).hover(function mouseOver (){
        var el = event.target;
        el.style.backgroundColor = "skyblue";
    }, function mouseOut (){
        var el = event.target;
        el.style.backgroundColor = "transparent";
    });    
        
});

//add text to text boxes
$(document).ready(function () {
    function populateContent (elid) {
        var el = document.getElementsByClassName(elid);

        for (var i = 0; i < el.length; i ++){
            el[i].innerHTML = info[i].period + "</br>" 
            + info[i].environment.text + "</br>";
        }
    }  
    populateContent("textContainer")
});

//psuedo distinct pages
$(document).ready(function () {
    var toggleContent = document.getElementsByClassName("showContent");
    for (var i = 0; i < toggleContent.length; i ++){
        toggleContent[i].content = document.getElementById("page" + (i + 1));
        toggleContent[i].urlString = "page" + (i + 1);
        toggleContent[i].onclick = function (button) {
            for (var n = 0; n < toggleContent.length; n++){
                toggleContent[n].content.style.display = "none"
            }
            parent.location.hash = button.target.urlString;
            button.target.content.style.display = "block";
        };
    }  
});

//if logo clicked, show homeContent 
$(document).ready(function () {
    var logo = document.getElementById("logo");
    var homeContent = document.getElementsByClassName("homeContent");
    logo.onclick = function () {
        location = "index.html"
    }
});

//highlight sidebar button based on users location
$(document).ready(function () {
    
}); 

//resize screen base on user's screen size
$(document).ready(function () {
    var toggleNavButtons = document.getElementById("topBarToggleNav");
    var navButtons = document.getElementsByClassName("navItem");
    if (window.innerWidth < 450) {
        //small screen
        ceManager('sbbce');
        toggleNavButtons.style.display = "block";
        for (var i = 0; i < navButtons.length; i ++){
            navButtons[i].style.display = "none";
        }
    }
    if (window.innerWidth > 450) {
        //big screen
        toggleNavButtons.style.display = "none";
                for (var i = 0; i < navButtons.length; i ++){
            navButtons[i].style.display = "block";
        }
    }
});


//function called from html, calls ce
function ceManager (elID) {
    //elements specified for collasping of side bar
    var el = 'sbbce'; //element
    var c = 'sideBarContainer';    // container 
    var mc = 'mainContent'; //main content
    var elm2 = null; //element to move 2
        
    collapseElement(el, c, mc, elm2);
}

function collapseElement (elID, cID, mcID, elm2ID) {  //collapse element
    var el = document.getElementById(elID); //element
    var c = document.getElementById(cID);    // container 
    var mc = document.getElementById(mcID); //main content
    var elm2 = document.getElementById(elm2ID); //element to move 2
        
    var leftpx = c.offsetWidth;
    var toppx = c.offsetHeight;
    
    var time, direction, timingFunction, delay, container_px, content_px, e2_px;

    if (helper.sbStuff.sbID == elID){        
        if (helper.sbStuff.sbOpen){
            time = "0.2s ";
            direction = "left ";
            timingFunction = "ease-out ";
            delay = "0s"
            container_px = "-150px"
            content_px = "30px";

            helper.sbStuff.sbOpen = false;
        } else if (!helper.sbStuff.sbOpen){
            timingFunction = "ease-in ";
            container_px = "0px"
            content_px = "180px"

            helper.sbStuff.sbOpen = true;
        }   // else if sbStiff.isOpen
        
        helper.sbStuff.animate(c, mc, container_px, content_px, direction, time, timingFunction, delay);
    }   // if side bar is side bar

}   //function ce

var helper = {   
    sbStuff : { //side bar stuff
        sbID: "sbbce",   //side bar button id 
        sbOpen: true,   //Side Bar open 
        
        animate: function (c, mc, container_px, content_px, direction, time, timingFunction, delay) {
            c.style.transition = direction + time + timingFunction +  delay;
            c.style.left = container_px;

            mc.style.transition = direction + time + timingFunction +  delay;
            mc.style.left = content_px;
        }
    }  //side bar stuff
    
}   //helper
