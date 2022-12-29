jQuery(document).ready(function () {
   // vages
   $('#main_visual').vegas({
      slides: [
         {src: '../resources/jej/main1.jpg'},
         {src: '../resources/jej/main2.jpg'},
         {src: '../resources/jej/main3.jpg'},
         {src: '../resources/jej/main4.jpg'},
      ],
   });


         $(function () {
            //쿠키("popup")의 값이 'none'이면 id 값이 인 요소를 숨김니다.
            if ($.cookie('popup') == 'none') {
               $('#notice_wrap').hide();
            }
            var $expireChk = $('#expireChk');
            $('.closeBtn').on('click', closePop);
            function closePop() {
               if ($expireChk.is(':checked')) {
                  $.cookie('popup', 'none', {expires: 3, path: '/'});
               }
               $('#notice_wrap').fadeOut('fast');
            }
         });
   
});
