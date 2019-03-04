<template lang="pug">
	Layout
		div(class="row")
			div(class="col-md-3 box img")
				img(src="/img/!練習56-5.jpg" alt="大頭貼")
				h1 ゆきふわり
				h2 midorin452@gmail.com
				p 對未來感到迷惘 啊啊啊～
			div(class="col-md-9 box text")
				p 啊不知道要打什麼 ((被打
</template>


<script>
export default {
	metaInfo: {
		title: '關於我',
		meta: [
			{ key: 'description', name: 'description', content: '我的自我介紹' }
		]
	},
	mounted () {
		document.querySelector('nav ul a.about').classList.add('current')
	}
}
</script>

<style lang="scss" scoped>
	@import '../scss/color.scss';
	
	.img {
		width: 70%;
		margin: 0 auto;
		text-align: center;
		img {
			width: 80%;
			margin: 5% 0% 5% 10%;
			border-radius: 100%;
			border: 3px solid $color_line;
		}
		h1, h2 {
			font-size: 1.2rem;
			margin-top: 1.5vh;
		}
	}
	.text {
		text-align: center;
		margin-top: 2vw;
	}
</style>
