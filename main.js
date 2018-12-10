var sl = $('.slick-list').slick({
	infinite: false,
	slidesToShow: 1,
	dots: false,
	arrows: false,
	swipe: false
})

let current = "about"
$("header nav ul li").on('click', (e) => {
	current = e.target.className.split(" ")[0]
	
	$(".page").css("display", "inline-block")
	$("header nav ul li").removeClass("current")
	$(`.${current}`).addClass("current")
	sl.slick('slickGoTo', e.target.dataset.index)
	setTimeout(() => {
		$(`.page`).css("display", "none")
		$(`.page.${current}`).css("display", "inline-block")
	}, 300)
})

$('.gallery .box').lightGallery({
	download: false,
	loop: false,
	counter: false
})
