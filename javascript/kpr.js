$(document).ready(function () {
  $('.navi > li').mouseover(function () {
    $(this).find('.submenu').stop().slideDown(500);
  }).mouseout(function () {
    $(this).find('.submenu').stop().slideUp(500);
  });
  var play = setInterval(autoPlay, 5000)
  
  $(function () {
        if ($.cookie('popup') == 'none') {
          $('#notice_wrap').hide();
        }
        var $expireChk = $('#expireChk');
        $('.closeBtn').on('click', closePop);
        function closePop() {
          if ($expireChk.is(':checked')) {
            $.cookie('popup', 'none', { expires: 3, path: '/' });
            }
            $('#notice_wrap').fadeOut('fast');
          }
        });

        function autoPlay() {
          e = document.querySelector('.showing')
    if (slot == slides) {
      slot = 0
      document.querySelectorAll('.slide')[0].classList.add('showing')
      e.classList.remove('showing')
    } else {
      slot++
      e.nextElementSibling.classList.add('showing')
      e.classList.remove('showing')
    }
  }


var btn = document.querySelectorAll('.swapBtn')
var slides = document.querySelectorAll('.slide').length - 1
var slot = 0

btn[0].addEventListener('click', function (e) {
  if (play) {
    clearInterval(play)
  }
  var e = document.querySelector('.showing')

  if (slot == 0) {
    slot = 3
    document.querySelectorAll('.slide')[slides].classList.add('showing')
    e.classList.remove('showing')
  } else {
    slot--
    e.previousElementSibling.classList.add('showing')
    e.classList.remove('showing')
  }
})

btn[1].addEventListener('click', function (e) {
  if (play) {
    clearInterval(play)
  }
  var e = document.querySelector('.showing')

  if (slot == slides) {
    slot = 0
    document.querySelectorAll('.slide')[0].classList.add('showing')
    e.classList.remove('showing')
  } else {
    slot++
    e.nextElementSibling.classList.add('showing')
    e.classList.remove('showing')
  }
})

function autoPlay() {
  e = document.querySelector('.showing')
  if (slot == slides) {
    slot = 0
    document.querySelectorAll('.slide')[0].classList.add('showing')
    e.classList.remove('showing')
  } else {
    slot++
    e.nextElementSibling.classList.add('showing')
    e.classList.remove('showing')
  }
}

var play = setInterval(autoPlay, 5000)

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
});