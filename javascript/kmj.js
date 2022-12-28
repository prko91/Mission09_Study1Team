// 우측 빠른메뉴
$(document).ready(function () {
    var currentPosition = parseInt($(".quickmenu").css("top"));
    $(window).scroll(function () {
      var position = $(window).scrollTop();
      $(".quickmenu")
        .stop()
        .animate({ top: position + currentPosition + "px" }, 1000);
    });
  });
  
  // 3. 쿠키 적용
  
  $(function () {
      if ($.cookie("popup") == "none") {
        $("#notice_wrap").hide();
      }
      var $expiresChk = $("#expiresChk");
      $(".closeBtn").on("click", closePop);
      function closePop() {
        if ($expiresChk.is(":checked")) {
          $.cookie("popup", "none", { expires: 3, path: "/" });
        }
        $("#notice_wrap").fadeOut("fast");
      }
    });

            // 베가스 적용
  $(function(){
    $("header").vegas({
      delay : 3000,
      slides: [
          { src: '../resources/kmj/f1.jpg' },
          { src: '../resources/kmj/f2.jpg' },
          { src: '../resources/kmj/f3.jpg' },
          { src: '../resources/kmj/f4.jpg' },
      ],
    }) 
});