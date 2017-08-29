var phoneInput = document.querySelector('.phone')
phoneInput.addEventListener('keydown', function(event) {
   if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
    var mask = '+7 (111) 111-11-11'; // Задаем маску
 
    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        // Здесь начинаем сравнивать this.value и mask
        // к примеру опять же
        var currentString = this.value;
        var currentLength = currentString.length;
        if (/[0-9]/.test(event.key)) {
            if (mask[currentLength] == '1') {
                this.value = currentString + event.key;
            } else {
                for (var i=currentLength; i<mask.length; i++) {
                if (mask[i] == '1') {
                    this.value = currentString + event.key;
                    break;
                }
                currentString += mask[i];
                }
            }
        }
    } 
});





$(window).on('scroll', function () {
  if ($(window).scrollTop() > 0) { 
      $('#header').css({'background' : 'rgba(255, 255, 255, 0.8)'});
  }
  if($(window).scrollTop() == 0) {
    $('#header').css({'background' : '#fff'});
  }
});

$(document).ready(function() {
$("#button").click(function(){
  $(".line1").toggleClass("open1");
  $(".line2").toggleClass("open2");
  $(".line3").toggleClass("open3");
});

    $('#button').click(function() {
        $('.hidden-menu').slideToggle(100);
    })

  $('a').click(function(e) {
    e.preventDefault();
  })



$('.colBack').click(function() {
  $('body, html').animate({
    scrollTop : $('#footForm').offset().top
  },666);
})

$('.intor a:eq(0)').click(function() {
  $('body, html').animate({
    scrollTop : $('#contactForm').offset().top
  },666);
})
$('.zamer').click(function() {
  $('body, html').animate({
    scrollTop : $('#contactForm').offset().top
  },666);
})
$('.intor a:eq(1)').click(function() {
  $('body, html').animate({
    scrollTop : $('.titlecalculDiv').offset().top
  },666);
})
$('.into-two a:eq(0)').click(function() {
  $('body, html').animate({
    scrollTop : $('.titleSliderDiv').offset().top
  },666);
})
$('.into-two a:eq(1)').click(function() {
  $('body, html').animate({
    scrollTop : $('#priceList').offset().top
  },666);
})
$('.top-navigation> a').click(function() {
    $('body, html').animate({
        scrollTop : $('#contentPopup').offset().top
    }, 666);
});
$('.infoBlock> a').click(function() {
  $('body, html').animate({
    scrollTop : $('#footForm').offset().top
  },666)
})
/*for M */
$('.ssilk a:eq(0)').click(function() {
  $('body, html').animate({
    scrollTop : $('#contactForm').offset().top
  },666)
})
$('.ssilk a:eq(1)').click(function() {
  $('body, html').animate({
    scrollTop : $('.mainSlider').offset().top
  },666)
})
$('.ssilk a:eq(2)').click(function() {
  $('body, html').animate({
    scrollTop : $('#priceList').offset().top
  },666)
})
$('.ssilk a:eq(3)').click(function() {
  $('body, html').animate({
    scrollTop : $('#contentPopup').offset().top
  },666)
})
$('.ssilk a:eq(4)').click(function() {
  $('body, html').animate({
    scrollTop : $('.titlecalculDiv').offset().top
  },666)
})
$('.arDown').click(function() {
  $('body, html').animate({
    scrollTop : $('.titleSliderDiv').offset().top
  },666)
})
$('.forArrowKriv> a').click(function(){
  $('body, html').animate({
    scrollTop : $('.plavniy').offset().top  
  },666)
})
$('.colBack').click(function(){
  $('body, html').animate({
    scrollTop : $('.plavniy').offset().top  
  },666)
})


//polzunok
$( ".polzun" ).slider({
    animate: true,
    range: "min",
    value: 1,
    min: 5,
    max: 100,
    step: 1,              
    //Получаем значение и выводим его на странице
    slide: function( event, ui ) {
          $( "#polzun-result-money" ).html( ui.value*200);
          $( "#polzun-result-money2" ).html( ui.value*400);
          $( "#polzun-result-metr" ).html( ui.value);
          $(".zakra").width(ui.value + '%');
    },
    //Обновляем скрытое поле формы, так что можно передать данные с помощью формы
    change: function(event, ui) { 
      $('#hidden').attr('value', ui.value*109000);
    }  
});



  $('.my-slider').slick({
    prevArrow: '<button class="prev-arrow" type="button"><img src="/img/left.png"></button>',
    nextArrow: '<button class="next-arrow" type="button"><img src="/img/right.png"></button>',
    dots: true,
    adaptiveHeight: true,
  });


// $('#fForm').submit(function(){
//   $.ajax({
//     type: "POST",
//     url: "send.php",
//     data: $(this).serialize()
//   }).done(function() {
//     alert('thanks');
//   });
//   return false;
// })


})




$(function($){
   $("#phone2").mask("+7 (999) 999-9999", {selectOnFocus: true});
});
$(function($){
   $(".forDerf").mask("99:99", {selectOnFocus: true});
});

