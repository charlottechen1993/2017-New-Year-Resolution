//var carLoop = false;
function animateCar(res_id, carLoop){
    if(carLoop==false){
        $("#"+res_id).children("img").stop();
//        $("#"+res_id).children("img").hide();
        $("#"+res_id).children("img").css({"right":"0px", "left":"0px", "margin":"auto"});
        return;
    } else{
        loop();
    }
    function loop(){
        $("#"+res_id).children("img").stop().animate({left: "-120%"}, 1500, "easeInBack", function(){
            $("#"+res_id).children("img").css({"right":"0px", "left":"100%", "margin":"auto"});
            $("#"+res_id).children("img").animate({left: "0%"}, 1500, "easeOutBack");
//            loop();
        });   
    }
    
};


$(document).ready(function(){
    $(".res").mouseenter(function(){
        var res_id = $(this).attr('id');
        if(res_id!="res5"){
            $(this).children("img").stop().show(0).css({"display":"block"});
        }   
        if(res_id=="res6"){ animateCar(res_id, true); }
    }); 
    $(".res").mouseleave(function(){
        var res_id = $(this).attr('id');
        if(res_id!="res5"){
//            $(this).children(".text-box").stop().animate({top: '0px'},400);
//            $(this).children("img").stop().hide(0);
        }
        if(res_id=="res6"){
            animateCar(res_id, false);
        }
    }); 
    
});

