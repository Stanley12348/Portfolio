//____________________________background__move_________________________
(function($){
    $.fn.backgroundMove=function(options){
            var defaults={
            movementStrength:'50'
        },
        options=$.extend(defaults,options);

         var $this = $(this);

           var movementStrength = options.movementStrength;
            var height = movementStrength / $(window).height();
            var width = movementStrength / $(window).width();
            $this.mousemove(function(e){
                      var pageX = e.pageX - ($(window).width() / 2);
                      var pageY = e.pageY - ($(window).height() / 2);
                      var newvalueX = width * pageX * -1 - 25;
                      var newvalueY = height * pageY * -1 - 50;
                      $this.css("background-position", newvalueX+"px     "+newvalueY+"px");
            });

        }
})(jQuery);



//___________MENU_____________________________________

	$(".hamburger-menu-wrapper").click(function() {
		$(".hamburger-menu").toggleClass("active");
	});

	$(".top_mnu ul a").click(function() {
		$(".menu-list").fadeOut(600);
		$(".hamburger-menu").toggleClass("active");
	}).append("<a>");

	$(".hamburger-menu-wrapper").click(function() {
		if ($(".menu-list").is(":visible")) {
			$(".menu-list").fadeOut(600);
			$(".menu-list a").removeClass("fadeInUp animated");
		} else {
			$(".menu-list").fadeIn(600);
			$(".menu-list a").addClass("fadeInUp animated");
		};
	});



	 		$(document).ready(function(){
    $(".menu-list").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 800);
    });
});

//_________________________---SKILLBAR_________________________
$('.skillbar').each(function(){
	$(this).find('.skillbar-bar').animate({
	width:$(this).attr('data-percent')
	}, 2000);
});