$(function() {
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#topNubex').fadeIn();
    } else {
    $('#topNubex').fadeOut();
    }
    });
    $('#topNubex').click(function() {
    $('body,html').animate({scrollTop:0},700);
    });
});

let slider=document.querySelector('.slider')
let count=0;

setInterval(function autop(){
    count +=500
    if (count>3500){
        count=0
    }
    slider.style.left=-count+'px';
}, 3500)