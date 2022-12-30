// visual 영역을 창크기로 확대
// window 객체(웹브라우저의 창(window))의 width(), height()로 지정
$(window).resize(function(){
    //visual영역의 이미지가 길어지지 않도록 $(window).height()에서 header의 높이를 구해서 뺌
    var headerheight = $('header').height()+7;
    // console.log(headerheight);
    $('.visual_bg').width($(window).width()).height($(window).height()-headerheight);
});

setTimeout(function(){
    $(window).resize()
}, 1000);

// visual 영역에 vegas jquery plugin 배경이미지 슬라이드 효과
$(".visual_bg").vegas({
    animation: 'random',
    delay: 5000,
    slides: [
        { src: '../resources/kej/main_bg01.jpg' },
        { src: '../resources/kej/main_bg02.jpg' },
        { src: '../resources/kej/main_bg03.jpg' },
        { src: '../resources/kej/main_bg04.jpg' }
    ],
    overlay: '../resources/kej/vegas_overlay_04.png'  //배경이미지 위에 dot pattern 이미지 적용
});

// 이벤트배너 영역에 Owl Carousel로이미지 슬라이드 효과 적용
$('.imgslide').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// 오늘 하루 열지 않음 레이어 팝업창
// 레이어 팝업이 떠 있을 때는 부모창에 스크롤이 안생기도록 막음
$('html, body').css({"overflow":"hidden","height":"100%"});
// 쿠키값(today)이 none이면 #popup_today 숨김
if($.cookie('today') == 'none') {
    $('#popup_today').hide();
    // 팝업이 없을 때 세로스크롤 생성
    $('html, body').css({"overflow-y":"auto","height":"auto"}); 
}
// .closeBtn 요소 클릭하면 체크박스의 체크유무에 따라 쿠키를 생성하여 1일간 저장
var $chk = $("#chk");
$(".closeBtn").on("click", closePop);
function closePop() {
    if($chk.is(":checked")){
        $.cookie("today", "none", {expires:1, path:"/"})
    }
    $("#popup_today").fadeOut("slow");
    // 팝업이 없을 때 세로스크롤 생성
    $('html, body').css({"overflow-y":"auto","height":"auto"}); 
}