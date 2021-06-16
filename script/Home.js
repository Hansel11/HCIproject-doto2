var currSlide = 0;
var sliderWidth = "60vw"
$("#left").click(function(){        
    if(currSlide > 0){
        $(".image").animate({"margin-left":"+="+sliderWidth}, 480);
        currSlide--;
    }
});
$("#right").click(function(){
    if(currSlide < 3){
        $(".image").animate({"margin-left":"-="+sliderWidth}, 480);
        currSlide++;
    }
});