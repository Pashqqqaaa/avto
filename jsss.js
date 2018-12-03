
 $(document).ready(function(){
      $('.slick').slick({
  slidesToShow: 1,
    slidesToScroll: 1,
     dots: false,
     fade: true,
       centerPadding: '0px'
});
    });

$(document).ready(function(){
    $(".modalbox").fancybox();
    $(".mod").fancybox();
    $("#f_contact").submit(function(){ return false; });
    $("#f_send").on("click", function(){
         
        // тут дальнейшие действия по обработке формы
        // закрываем окно, как правило делать это нужно после обработки данных
        $("#f_contact").fadeOut("fast", function(){
            $(this).before("<p><strong>Ваше сообщение отправлено!</strong></p>");
            setTimeout("$.fancybox.close()", 1000);
        });
    });
});

$(document).ready(function() {
	$("#f_phone").inputmask("+7(999)999-99-99")
	$("#f_pho").inputmask("+7(999)999-99-99")
});

 $("#demoTab").easyResponsiveTabs({
            type: 'default', //Типы: default, vertical, accordion
            width: 'auto', //auto или любое значение ширины
            fit: true,   // 100% пространства занимает в контейнере
            activate: function() {} // Функция обратного вызова, используется, когда происходит переключение вкладок
        });
        
