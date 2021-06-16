$("#kapak").hide();
$("#singa").hide();

var curr = "joger"
for(var i=2;i<=4;i++)$("#"+curr+"-s"+i).hide();
var skill = 1;

function showSKill(num){
    if(num == skill)return;
    $("#"+curr+"-s"+skill).hide();
    $("#"+curr+"-s"+num).show();
    skill = num;
}

function showHero(hero){
    if(hero == curr)return;
    if($(window).width()>800){
        $("#"+hero).toggle("swing");
        $("#"+curr).toggle("swing");
    }
    else{
        $("#"+hero).fadeToggle();
        $("#"+curr).toggle();
    }
    curr = hero;
    for(var i=2;i<=4;i++)$("#"+curr+"-s"+i).hide();
    $("#"+curr+"-s"+1).show();
    skill = 1;
}

$("#hero1").click(function(){
    showHero("joger");
});
$("#hero2").click(function(){
    showHero("kapak");
});
$("#hero3").click(function(){
    showHero("singa");
});

$(".skill1").click(function(){
    showSKill(1);
});
$(".skill2").click(function(){
    showSKill(2);
});
$(".skill3").click(function(){
    showSKill(3);
});
$(".skill4").click(function(){
    showSKill(4);
});