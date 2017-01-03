//var carLoop = false;
function animateCar(res_id, carLoop){
    if(carLoop==false){
        $("#"+res_id).children("img").stop();
        $("#"+res_id).children("img").hide();
        $("#"+res_id).children("img").css("right","-70px");
        return;
    } else{
        loop();
    }
    function loop(){
        $("#"+res_id).children("img").stop().animate({right: "400px"}, 3000, "swing", function(){
            $("#"+res_id).children("img").css("right","-70px");
            loop();
            console.log("looping");
        });   
    }
    
};


$(document).ready(function(){
    $(".res").mouseenter(function(){
        var res_id = $(this).attr('id');
        if(res_id!="res5"){
            $(this).children(".text-box").stop().animate({top: '-30px'},400);
            $(this).children("img").delay(100).stop().show(0).css({"display":"inline-block"});
        }   
        if(res_id=="res6"){ animateCar(res_id, true); }
    }); 
    $(".res").mouseleave(function(){
        var res_id = $(this).attr('id');
        if(res_id!="res5"){
            $(this).children(".text-box").stop().animate({top: '0px'},400);
            $(this).children("img").stop().hide(0);
        }
        if(res_id=="res6"){
            animateCar(res_id, false);
        }
    }); 
    
});

