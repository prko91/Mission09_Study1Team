// cookie popup
$(function () {
  if ($.cookie('popup') == 'none') {
    $('#notice_wrap').hide();
  }
  var $expireChk = $('#expireChk');
  $('.closeBtn').on('click', closePop);
  function closePop() {
    if ($expireChk.is(':checked')) {
      $.cookie('popup', 'none', { expires: 3, path: '/' }); // 체크 시 3일 후 expires
    }
    $('#notice_wrap').fadeOut('fast');
  }
});
  
// vehicle-slide 
var play = setInterval(autoPlay, 4000)  // 자동재생
function autoPlay() {
    e = document.querySelector('.showing')
    if (slot == slides) {
      slot = 0
      document.querySelectorAll('.vehicle-slide')[0].classList.add('showing')
      e.classList.remove('showing')
    } else {
      slot++
      e.nextElementSibling.classList.add('showing')
      e.classList.remove('showing')
    }
  }

// vehicle-slide 넘기기 버튼
var btn = document.querySelectorAll('.swapBtn')
var slides = document.querySelectorAll('.vehicle-slide').length - 1
var slot = 0

btn[0].addEventListener('click', function (e) {
  if (play) {
    clearInterval(play)
  }
  var e = document.querySelector('.showing')
  if (slot == 0) {
    slot = 3
    document.querySelectorAll('.vehicle-slide')[slides].classList.add('showing')
    e.classList.remove('showing')
  } else {
    slot--
    e.previousElementSibling.classList.add('showing')
    e.classList.remove('showing')
  }
})

// footer section Vegas 
$(function() {
  $('footer').vegas({
    slides: [
      { src: '../resources/kpr/ch-1.jpg' },
      { src: '../resources/kpr/ch-2.jpg' },
      { src: '../resources/kpr/ch-3.jpg' }
  ],
  animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
  overlay: '/js/vegas/dist/overlays/09.png'
  });
});
$.vegas.isVideoCompatible = function () {
  var devices = /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i;
  return !devices.test(navigator.userAgent);
}