// burger
$(window).on("load resize", function(){
	if ($(window).width() < 768){
		if (document.querySelector(".menu__button.active"))
			$('.menu__box,.menu__button').addClass('active');
			$('body').add('lock');
	} else {
		if (document.querySelector(".menu__button.active"))
			$('.menu__box,.menu__button').removeClass('active');
			$('body').removeClass('lock');
  }

});
$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger,.menu__box').toggleClass('active');
		$('body').toggleClass('lock');
	});
});