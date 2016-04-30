// function SBB(id){    //side bar button
//     this.el = document.getElementById(id);
//     this.defBgColor= "skyGreen"

//     this.setBg= function(color){
//         this.el.style.backgroundColor= color;
//     }
//     this.setBg1= function(){
//         this.setBg( this.defBgColor );
//     }
// }
// function SBBC(id){   //side bar button color
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
    
    //side bar button changes color on hover
    var sbe = $(".buttonSideBar").hover(function mouseOver (){
        var el = event.target;
        el.style.backgroundColor = "skyblue";
    }, function mouseOut (){
        var el = event.target;
        el.style.backgroundColor = "transparent";
    });    

//    for (var i = 1; i < sbe.length; i ++){
//        var el = sbe[i];
//        sbe[i].hover(mouseOver, mouseOut);
//    }
    
    // new SBB( "#sbbHI" ).el.onmouseover = x.setBg1;    
    // $("#sbbHI").on("mouseover", helper.buttonSideBarMOsbbHI);
    
    // $("#sbbHI").on("mouseleave", helper.buttonSideBarMLsbbHI);
    // new SBBC( "#sbbHI" ).prepEl();
    // $("#sbbHI").on("mousedown", helper.buttonSideBarMDsbbHI); 

    
    populateContent("textContainer");  
    
});

var el;

function populateContent (elid) {
     el = document.getElementsByClassName(elid);

    for (var i = 0; i < el.length; i ++){
        el[i].innerHTML = info[i].period + "</br>" 
            + info[i].environment.text + "</br>";
    }
}

function ce (elid, cid, mcid, elm2id, tbDirection, isScrolling) {  //collapse element
    var el = document.getElementById(elid); //element
    var c = document.getElementById(cid);    // container 
    var mc = document.getElementById(mcid); //main content
    var elm2 = document.getElementById(elm2id); //element to move 2
    
    var leftpx = c.offsetWidth;
    var toppx = c.offsetHeight;
    
    var time, direction, timingFunction, delay, container_px, content_px, e2_px;

    if (helper.sbStuff.sbID == elid){        
        if (helper.sbStuff.sbOpen){
            time = "0.2s ";
            direction = "left ";
            timingFunction = "ease-out ";
            delay = "0s"
            container_px = "-150px"
            content_px = "30px";

            helper.sbStuff.sbOpen = false;
        } else if (!helper.sbStuff.sbOpen){
            time = "0.2s ";
            direction = "left ";
            timingFunction = "ease-in ";
            delay = "0s"
            container_px = "0px"
            content_px = "180px"

            helper.sbStuff.sbOpen = true;
        }   // else if sbStiff.isOpen
        
        helper.sbStuff.animate(c, mc, container_px, content_px, direction, time, timingFunction, delay);
    }   // if side bar is side bar
    
    if (helper.tbStuff.tbID == elid){
        if (!helper.tbStuff.tbOpen || tbDirection === "up"){    //closed
            time = "0.2s ";
            direction = "top ";
            timingFunction = "ease-out ";
            delay = "0s";
            container_px = "-50px";
            content_px = "30px";
            e2_px = "30px";
            
            helper.tbStuff.tbOpen = true; 
            helper.tbStuff.canMovefScroll = false;
        } else if (helper.tbStuff.tbOpen || tbDirection === "down"){   //open
            time = "0.2s ";
            direction = "top ";
            timingFunction = "ease-in ";
            delay = "0s";
            container_px = "0px";
            content_px = "80px";
            e2_px = "80px";
            
            helper.tbStuff.tbOpen = false;
            helper.tbStuff.canMovefScroll = true;
        }   //if tob bar is open/closed
        
        helper.tbStuff.animate(c, mc, elm2, container_px, content_px, e2_px, direction, time, timingFunction, delay);
    }   //if top bar

}   //function ce

var lastScrollTop = 0;
//document.addEventListener("scroll", function(){ 
//   var st = window.pageYOffset || document.documentElement.scrollTop; 
//   if (st > lastScrollTop){
//       console.log("down", st)
//       ce('tbbce', 'topBarContainer', 'mainContent' , 'sideBarContainer', "down", true );
//   } else {
//       console.log("up", st)
//       if (st < 1250){
//            ce('tbbce', 'topBarContainer', 'mainContent' , 'sideBarContainer', "up", true );
//       }
//   }
//   lastScrollTop = st;
//}, false);

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
    },  //side bar stuff
    
    tbStuff: {  //top bar stuff
        tbID: "tbbce",    //top bar button id
        tbOpen: false,   //top bar open
        canMovefScroll: true,    //can move from scroll
        
        animate: function (c, mc, elm2, container_px, content_px, e2_px, direction, time, timingFunction, delay) {
            c.style.transition = direction + time + timingFunction +  delay;
            c.style.top = container_px;

            mc.style.transition = direction + time + timingFunction +  delay;
            mc.style.top = content_px;

            elm2.style.transition = direction + time + timingFunction +  delay;
            elm2.style.top = e2_px;  
     
        } 
    }   //top bar stuff
    
}   //helper
