$(document).ready(function(){
    $(".res").mouseenter(function(){
        console.log("hello");
        $(this).children(".text-box").animate({top: '-30px'},200);
    }); 
    $(".res").mouseleave(function(){
        console.log("hello");
        $(this).children(".text-box").animate({top: '0px'},200);
    }); 
});
