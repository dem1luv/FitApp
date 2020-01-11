"use strict";

$('.home, .header').on('mousemove', (e) => {
	if ($(window).width() < 800){
		return;
	}
	const x = e.pageX / $(window).width();
	const y = e.pageY / $(window).height();

	//let y1 = $('.i1').css("transform").slice(7, -1).split(', ')[5]; (y)
	
	$('.home .im1').css(
		'transform',
		`translate(${x * 80}px, ${y * 80}px)`
	);
	$('.home .im2').css(
		'transform',
		`translate(${x * 45}px, ${y * 45}px)`
	);
	$('.home .im3').css(
		'transform',
		`translate(${x * 100}px, ${y * 100}px)`
	);
	$('.home .im4').css(
		'transform',
		`translate(${x * 125}px, ${y * 125}px)`
	);
	$('.home .im5').css(
		'transform',
		`translate(${x * 71}px, ${y * 71}px)`
	);
});

$('.simple').on('mousemove', (e) => {
	if ($(window).width() < 800){
		return;
	}
	const x = e.pageX / $(window).width();
	const y = e.pageY / $(window).height();

	//let y1 = $('.i1').css("transform").slice(7, -1).split(', ')[5]; (y)
	
	$('.simple .im1').css(
		'transform',
		`translate(-${x * 120}px, -${y * 120}px)`
	);
	$('.simple .im2').css(
		'transform',
		`translate(-${x * 60}px, -${y * 60}px)`
	);
	$('.simple .im3').css(
		'transform',
		`translate(-${x * 80}px, -${y * 80}px)`
	);
	$('.simple .im4').css(
		'transform',
		`translate(-${x * 100}px, -${y * 100}px)`
	);
});

$('.download').on('mousemove', (e) => {
	if ($(window).width() < 800){
		return;
	}
	const x = e.pageX / $(window).width();
	const y = e.pageY / $(window).height();

	//let y1 = $('.i1').css("transform").slice(7, -1).split(', ')[5]; (y)
	
	$('.download .im1').css(
		'transform',
		`translate(${x * 60}px, ${y * 0}px)`
	);
	$('.download .im2').css(
		'transform',
		`translate(${x * 130}px, ${y * 0}px)`
	);
	$('.download .im3').css(
		'transform',
		`translate(${x * 35}px, ${y * 0}px)`
	);
	$('.download .im4').css(
		'transform',
		`translate(${x * 90}px, ${y * 0}px)`
	);
	$('.download .im5').css(
		'transform',
		`translate(${x * 45}px, ${y * 0}px)`
	);
});