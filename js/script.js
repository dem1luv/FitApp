//parallax
$(document).ready(function(){
    new WOW().init();

    let scenes = document.querySelectorAll(".parallax");
    scenes.forEach(scene => new Parallax(scene));
});
//anchors
$(document).ready(function(){
    $(".header__nav,.header__logo,.menu__logo,.footer__links,.home__button-container,.places__button-container").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
			top = $(id).offset().top;
		top -= screen.width < 768 ? 57 : 0;
		$('body,html').animate({scrollTop: top}, 1000);
	});
	$(".menu__box").on("click","a", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('.menu__box,.header__burger').removeClass('active');
		$('body').removeClass('lock');
		$('body,html').animate({scrollTop: top - 57}, 1000);
	})
});