console.log("console start");

$(document).ready(function(){
                var screenSize = 1200;
                console.log("AltMenu - Start - Current Size: " + document.documentElement.clientWidth);
                if (document.documentElement.clientWidth >= screenSize) {
                    console.log("AltMenu - loop - Screen Size greate/equal than " + screenSize);
                    
                    fileFQDN = window.location.pathname;
                    filename = fileFQDN.substr(fileFQDN.lastIndexOf('/')+1).toLowerCase();                
                    if(!filename.startsWith("lec")){
                        $(".nav-alternative").css("display", "none");
                        $(".nav-regular").css("display", "block");
                        $("header").css("display", "block");
                        $("footer").css("display", "block");
                        console.log("AltMenu - loop - no lecture page");
                    }
                }
                console.log("AltMenu - end");
});