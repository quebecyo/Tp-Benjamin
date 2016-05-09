// Developped By Benjamin Gagné
// 2016/05/06
$(function(){
    console.log("jQuery branché et DOM chargé !");

    $(".aside_menu1").click(function(){
      $(this).addClass("active");
      $(".aside_menu2").removeClass("active");
      $(".aside_menu3").removeClass("active");
      $(".aside_menu4").removeClass("active");
      $(".aside_menu5").removeClass("active");
    });
    $(".aside_menu2").click(function(){
      $(this).addClass("active");
      $(".aside_menu1").removeClass("active");
      $(".aside_menu3").removeClass("active");
      $(".aside_menu4").removeClass("active");
      $(".aside_menu5").removeClass("active");
    });
    $(".aside_menu3").click(function(){
      $(this).addClass("active");
      $(".aside_menu1").removeClass("active");
      $(".aside_menu2").removeClass("active");
      $(".aside_menu4").removeClass("active");
      $(".aside_menu5").removeClass("active");
    });
    $(".aside_menu4").click(function(){
      $(this).addClass("active");
      $(".aside_menu1").removeClass("active");
      $(".aside_menu2").removeClass("active");
      $(".aside_menu3").removeClass("active");
      $(".aside_menu5").removeClass("active");
    });
    $(".aside_menu5").click(function(){
      $(this).addClass("active");
      $(".aside_menu1").removeClass("active");
      $(".aside_menu2").removeClass("active");
      $(".aside_menu3").removeClass("active");
      $(".aside_menu4").removeClass("active");
    });
    var delay = false;

// from http://jsfiddle.net/t6LLybx8/12/
  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;

    delay = true;
    setTimeout(function(){delay = false},200)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var sec= document.getElementsByTagName('section');
    if(wd < 0) {
      for(var i = 0 ; i < sec.length ; i++) {
        var t = sec[i].getClientRects()[0].top;
        if(t >= 40) break;
      }
    }
    else {
      for(var i = sec.length-1 ; i >= 0 ; i--) {
        var t = sec[i].getClientRects()[0].top;
        if(t < -20) break;
      }
    }
    $('html,body').animate({
      scrollTop: sec[i].offsetTop
    });
  });
});
