var slider = $('.bxslider').bxSlider({
    adaptiveHeight: true,
    auto: true,
    autoControlsSelector: '.bx-start',
    controls: false,
    maxSlides: 1,
    minSlides: 1,
    pager: false,
    resposive: true,
    tickerHover: true,
    speed:1000,
    captions: true
});
$('.bx-next').click(function (e) {
    slider.stopAuto();
    slider.goToNextSlide();
    startSlideshow();
});

$('.bx-prev').click(function (e) {
    slider.stopAuto();
    slider.goToPrevSlide();
    startSlideshow();
});

 $('.bx-pause').click(function (e) {
    var $this = $(this);
    if ($this.hasClass('is-paused')) {
        startSlideshow();
    } else {
        stopSlideshow();
    }
});

function startSlideshow() {
    $('.bx-pause').removeClass('is-paused');
    slider.startAuto();
};

function stopSlideshow() {
    $('.bx-pause').addClass('is-paused');
    slider.stopAuto();
};
            


$(function()
{
    $(window).scroll(function(){
      
       if($(this).scrollTop()>=2950)
       {
           $(".count").countTo();
       }
        else
        {
             $(".count").countTo('restart');
        }
    });
  

});

$(function()
{
    var scrollButton =$(".Scroll-up");
    $(window).scroll(function(){
      
       if($(this).scrollTop()>=500)
       {
           scrollButton.show();
       }
        else
        {
            scrollButton.hide();
        }
    });
  scrollButton.click(function(){
  $("html,body").animate({scrollTop:0},3000);
  });

});

$(window).load(function()
{ 
    $(".loading-page .sk-folding-cube").fadeOut(100,
    function(){
        $(".loading-page").fadeOut(100);
    });
});
