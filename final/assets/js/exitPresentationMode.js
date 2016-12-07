$(document).ready(function(){
    $(".lecture-exit").click(function(){
        $("header").css("display","block");
        $("footer").css("display","block");
        $(".nav-menulist").css("display","inline-block");
        $(".lecture-exit").css("visibility","hidden");
        $(".nav-menulist a").css("font-size","15px"); 
    });
});