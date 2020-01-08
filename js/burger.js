"use strict"

$(window).on("load resize", function(){
	if ($(window).width() < 768){
		$('.header__nav>.link-get-app').appendTo($('.header-menu')).css("display", "inline");
  	$('.header__links>a').appendTo($('.header-menu')).css("display", "inline");
	} else {
		$('.header-menu>.link-get-app').appendTo($('.header__nav'));
		$('.header-menu>a').appendTo($('.header__links'));
  }

  if ($(window).width() < 460) {
  	$('.header__nav>.link-get-app').appendTo($('.header-menu')).css("display", "inline");
  } else {
  	$('.header-menu>.link-get-app').appendTo($('.header__nav'));
  }
});

$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger,.header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});