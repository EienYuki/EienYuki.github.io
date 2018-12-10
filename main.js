var sl = $('.slick-list').slick({
	infinite: false,
	slidesToShow: 1,
	dots: false,
	arrows: false,
	swipe: false
})

$("header nav .about").on('click', (e) => { sl.slick('slickGoTo', e.target.dataset.index) })
$("header nav .graphics").on('click', (e) => { sl.slick('slickGoTo', e.target.dataset.index) })
$("header nav .project").on('click', (e) => { sl.slick('slickGoTo', e.target.dataset.index) })

$('.gallery .box').lightGallery({
	download: false,
	loop: false,
	counter: false
});
