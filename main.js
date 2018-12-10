var sl = $('.slick-list').slick({
	infinite: false,
	slidesToShow: 1,
	dots: false,
	arrows: false,
	swipe: false
})

$("header nav ul li").on('click', (e) => {
	let name = e.target.className.split(" ")[0]
	
	$(".page").css("display", "inline-block")
	$("header nav ul li").removeClass("current")
	$(`.${name}`).addClass("current")
	sl.slick('slickGoTo', e.target.dataset.index)
	setTimeout(() => {
		$(`.page`).css("display", "none")
		$(`.page.${name}`).css("display", "inline-block")
	}, 300)
})

$('.gallery .box').lightGallery({
	download: false,
	loop: false,
	counter: false
})
